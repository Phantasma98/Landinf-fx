import styles from "./index.module.css";

const SectionCookies = () => {
  return (
    <section id="cookies" className={styles.cookiesMain}>
      <div className={styles.cookiesSection}>
        <div className={`${styles.cookiesTitle} font-title-l title-l-m `}>
          ВИКОРИСТАННЯ COOKIES
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            1. Загальні положення
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            Ця Політика використання файлів cookie пояснює, як веб-сайт
            https://feniks.army/ (далі – “Сайт”) використовує файли cookie та
            подібні технології для збору та обробки інформації про вас. Ми
            використовуємо файли cookie для забезпечення належної роботи Сайту
            та надання кращого користувацького досвіду.
          </div>
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            2. Що таке файли cookie?
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            Файли cookie – це невеликі текстові файли, які зберігаються на
            вашому пристрої, коли ви відвідуєте веб-сайт. Вони використовуються
            для збору інформації про ваші вибори та налаштування, а також для
            збору даних для аналізу та покращення функціонування Сайту.
          </div>
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            3. Типи файлів cookie, які ми використовуємо
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            Файли необхідні для роботи: ці файли допомагають забезпечити
            правильну роботу Сайту та доступ до основних функцій.
            <br />
            Файли аналітики: ми використовуємо файли cookie для збору анонімних
            даних про використання Сайту, щоб розуміти, як користувачі
            взаємодіють з контентом та покращити його якість.
          </div>
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            4. Керування файлами cookie
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            Ви маєте можливість керувати використанням файлів cookie через
            налаштування вашого веб-браузера. Ви можете вибрати блокування всіх
            файлів cookie або отримати попередження перед їх збереженням.
            Зверніть увагу, що вимкнення файлів cookie може призвести до
            обмеження доступу до деяких функцій Сайту.
          </div>
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            5. Відмова від відповідальності
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            Ми не несемо відповідальність за файли cookie та технології третіх
            сторін, які можуть використовуватися на Сайті. Рекомендуємо
            переглядати політику конфіденційності та використання файлів cookie
            цих третіх сторін.
          </div>
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            6. Зміни в Політиці використання файлів cookie
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            Адміністратор Сайту час від часу оновлювати цю Політику. Будь ласка,
            періодично переглядайте цей документ, щоб бути в курсі будь-яких
            змін.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCookies;
