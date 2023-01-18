import './App.css';

function App() {
  return (
    <form class="js-form form">
        <h1 class="form__header">Przelicznik Walut</h1>
        <p>
            <label>
                <span class="form__labelText">
                    Kwota w zł* :
                </span>
                <input placeholder="Wpisz kwote w zł" class="form__field js-amount" type="number" required step="0.01"
                    min="0"/>
            </label>
        </p>
        <p>
            <label>
                <span class="form__labelText">
                    Waluta:
                </span>
                <select class="form__field js-currency">
                    <option value="GBP">Funt brytyjski</option>
                    <option value="EUR">Euro</option>
                    <option value="USD">Dolar amerykański</option>
                </select>
            </label>
        </p>
        <p>
            <button class="form__button">Przelicz</button>
        </p>
        <p class="js-result form__result">

        </p>
    </form>
  );
};

export default App;
