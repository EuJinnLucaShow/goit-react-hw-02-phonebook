**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

Используй этот
[шаблон React-проекта](https://github.com/goitacademy/react-homework-template#readme)
как стартовую точку своего приложения.

# Критерии приема

- Созданы репозитории `goit-react-hw-02-feedback` и
  `goit-react-hw-02-phonebook`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочие
  страницы каждого задания на `GitHub Pages`.
- При запуске кода задания, в консоли нету ошибок и предупреждений.
- Для каждого компонента есть отдельный файл в папке `src/components`.
- Для компонентов описаны `propTypes`.
- Все что компонент ожидает в виде пропсов, передается ему при вызове.
- JS-код чистый и понятный, используется `Prettier`.
- Стилизация выполнена `CSS-модулями` или `Styled Components`.

## Задания

**Читати іншими мовами: [Русский](README.md), [Українська](README.ua.md).**

# Віджет відгуків

Як і більшість компаній, кафе Expresso збирає відгуки від своїх клієнтів. Твоє завдання – створити додаток для збору статистики. Є лише три варіанти зворотного зв'язку: добре, нейтрально і погано.

## Крок 1

Застосунок повинен відображати кількість зібраних відгуків для кожної категорії. Застосунок не повинен зберігати статистику відгуків між різними сесіями (оновлення сторінки).

Стан застосунку обов'язково повинен бути наступного вигляду, додавати нові властивості не можна.

```bash
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
```

Інтерфейс може мати такий вигляд.

![preview](./mockup/step-1.png)

## Крок 2

Розшир функціонал застосунку таким чином, щоб в інтерфейсі відображалося більше статистики про зібрані відгуки. Додай відображення загальної кількості зібраних відгуків з усіх категорій та відсоток позитивних відгуків. Для цього створи допоміжні методи `countTotalFeedback()` і `countPositiveFeedbackPercentage()`, які підраховують ці значення, ґрунтуючись на даних у стані (обчислювані дані).

![preview](./mockup/step-2.png)

## Крок 3

Виконай рефакторинг застосунку. Стан застосунку повинен залишатися у кореневому компоненті `<App>`.

- Винеси відображення статистики в окремий компонент
  `<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`.
- Винеси блок кнопок в компонент
  `<FeedbackOptions options={} onLeaveFeedback={}>`.
- Створи компонент `<Section title="">`, який рендерить секцію із заголовком і дітей (children). Обгорни кожен із `<Statistics>` і `<FeedbackOptions>` у створений компонент секції.

## Крок 4

Розшир функціонал застосунку таким чином, щоб блок статистики рендерився тільки після того, як було зібрано хоча б один відгук. Повідомлення про відсутність статистики винеси в компонент `<Notification message="There is no feedback">`.

![preview](./mockup/preview.gif)

**Читати іншими мовами: [Русский](README.md), [Українська](README.ua.md).**

# Телефонна книга

Напиши застосунок зберігання контактів телефонної книги.

## Крок 1

Застосунок повинен складатися з форми і списку контактів. На поточному кроці реалізуй додавання імені контакту та відображення списку контактів. Застосунок не повинен зберігати контакти між різними сесіями (оновлення сторінки).

Використовуйте цю розмітку інпуту з вбудованою валідацією для імені контакту.

```html
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
```

Стан, що зберігається в батьківському компоненті `<App>`, обов'язково повинен бути наступного вигляду, додавати нові властивості не можна.

```bash
state = {
  contacts: [],
  name: ''
}
```

Кожен контакт повинен бути об'єктом з властивостями `name` та `id`. Для генерації ідентифікаторів використовуй будь-який відповідний пакет, наприклад [nanoid](https://www.npmjs.com/package/nanoid). Після завершення цього кроку, застосунок повинен виглядати приблизно так.

![preview](./mockup/step-1.png)

## Крок 2

Розшир функціонал застосунку, дозволивши користувачам додавати номери телефонів. Для цього додай `<input type="tel">` у форму і властивість для зберігання його значення в стані.

```bash
state = {
  contacts: [],
  name: '',
  number: ''
}
```

Використовуй цю розмітку інпуту з вбудованою валідацією для номеру контакту.

```html
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
```

Після завершення цього кроку, застосунок повинен виглядати приблизно так.

![preview](./mockup/step-2.png)

## Крок 3

Додай поле пошуку, яке можна використовувати для фільтрації списку контактів за ім'ям.

- Поле пошуку – це інпут без форми, значення якого записується у стан (контрольований елемент).
- Логіка фільтрації повинна бути нечутливою до регістру.

```bash
state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}
```

![preview](./mockup/step-3.gif)

Коли ми працюємо над новим функціоналом, буває зручно жорстко закодувати деякі дані у стан. Це позбавить необхідності вручну вводити дані в інтерфейсі для тестування роботи нового функціоналу. Наприклад, можна використовувати такий початковий стан.

```bash
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
```

## Крок 4

Якщо твій застосунок реалізований в одному компоненті `<App>`, виконай рефакторинг, виділивши відповідні частини в окремі компоненти. У стані кореневого компонента `<App>` залишаться тільки властивості `contacts` і `filter`.

```bash
state = {
  contacts: [],
  filter: ''
}
```

Достатньо виділити чотири компоненти: форма додавання контактів, список контактів, елемент списку контактів та фільтр пошуку.

Після рефакторингу кореневий компонент програми виглядатиме так.

```jsx
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

## Крок 5

Заборони користувачеві можливість додавати контакти, імена яких вже присутні у телефонній книзі. При спробі виконати таку дію виведи `alert` із попередженням.

![preview](./mockup/step-5.png)

## Крок 6

Розшир функціонал застосунку, дозволивши користувачеві видаляти раніше збережені контакти.

![preview](./mockup/step-6.gif)
