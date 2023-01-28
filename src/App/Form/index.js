import { useState } from "react";
import { Result } from "./Result";
import { Button, Failure, Field, Header, LabelText, Loading, Wrapper } from "./styled";

import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResults = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResults(currency, amount);
    }

    return (
        <Wrapper onSubmit={onSubmit}>
            <Header>
                Przelicznik walut
            </Header>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Sekunda... 🙂 <br />Ładuję kursy z Europejskiego Banku Centralnego.
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Hmm... Coś poszło nie tak 1F914	🤔 Sprawdź, czy masz połączenie z internetem.
                        </Failure>
                    ) : (
                        <>
                            <p>
                                <label>
                                    <LabelText>
                                        Kwota w zł*:
                                    </LabelText>
                                    <Field
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        placeholder="Wpisz kwotę w złotych"
                                        type="number"
                                        required
                                        step="0.01"
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <LabelText>
                                        Waluta:
                                    </LabelText>
                                    <Field
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </Field>
                                </label>
                            </p>
                            <p>
                                <Button>Przelicz</Button>
                            </p>

                            <Result result={result} />
                        </>
                    )
                )}
        </Wrapper>
    );
};