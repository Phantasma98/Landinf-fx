# SITEMAP — Visual Screenshot Identification Guide

This document maps every page and section to its unique visual/text markers so that when given a screenshot, AI can instantly identify which page and section it belongs to.

---

## Quick Reference Table

| Page | Route | Hero Title | Theme |
|------|-------|-----------|-------|
| Home | `/` | "спалюємо межи можливого" | dark |
| About | `/about` | "крила, що спопеляють" | surface |
| Contract 18-24 | `/contract` | "левел-ап твоєї молодості" | surface |
| Contacts | `/contacts` | "ФЕНІКС НА ЗВʼЯЗКУ" | dark |
| Donations | `/donations` | (no hero) "Закриті збори" | surface |
| Fundraising | `/fundraising` | (no hero) "Закриті збори" | surface |
| Vacancies | `/vacancies` | "ефективна реалізація твоїх скілів" | dark |
| Vacancy Detail | `/vacancy/:id` | (varies by vacancy title) | surface |
| Cookies | `/cookies` | (no hero, policy text) | surface |
| Privacy Policy | `/policy` | (no hero, policy text) | surface |
| 404 | `*` | "СТОРІНКУ НЕ ЗНАЙДЕНО" | — |

---

## 1. HOME PAGE — `/`

### 1.1 HeroSection
- **Unique text:** "спалюємо межи можливого"
- **Meta label:** "ГОЛОВНИЙ ВІДДІЛ БЕЗПІЛОТНИХ АВІАЦІЙНИХ СИСТЕМ ДЕРЖАВНОЇ ПРИКОРДОННОЇ СЛУЖБИ УКРАЇНИ «ФЕНІКС»"
- **CTA buttons:** "ДОЛУЧИТИСЬ" + "ПІДТРИМАТИ"
- **Visual:** dark background, military operator with drone silhouette, social icons on left side
- **Theme:** dark

### 1.2 AboutSection
- **Unique text (title):** "про нас"
- **Description starts with:** "Фенікс - це найрезультативніший підрозділ ДПСУ..."
- **Key stats visible:** "ТОП-2", "126500", "26500", "5130"
- **Visual:** image carousel of team members/equipment, stat counters

### 1.3 CommanderSection
- **Unique text:** "Дмитро Олексюк" / позивний "Земляк"
- **Quote:** "«перетворюємо службу на високотехнологічну роботу...»"
- **Labels:** "Герой України", "Полковник"
- **CTA:** "дізнатись більше про фенікс"
- **Visual:** photo of commander, military awards

### 1.4 ValuesSection
- **Unique text (title):** "цінності"
- **Subtitle starts with:** "Фенікс - сучасний підрозділ з культурою та динамікою команди Формули-1..."
- **6 value cards:**
  1. "Радикальна Чесність"
  2. "культ результату"
  3. "Анти-Застій"
  4. "Екосистема Важливості"
  5. "Спеціалізація Піт-стоп"
  6. "Принцип Телеметрії"
- **Visual:** numbered cards (01–06) with icons, dark background

### 1.5 JobsSection (on Home)
- **Unique text (title):** "Вакансії"
- **Subtitle starts with:** "Ми будуємо екосистему, де бойова робота і забезпечення..."
- **Category tabs:** БПЛА, НРК, РЕБ/РЕР, МАЙСТЕРНЯ, IT, ЗВʼЯЗОК, ТРАНСПОРТ, ШТАБ, ІНШЕ
- **Quote:** "УСПІШНА МІСІЯ - це не індивідуальне досягнення пілота, це РЕЗУЛЬТАТ безперебійної роботи всієї команди."
- **CTA:** "стати частиною команди"
- **How to distinguish from Vacancies page JobsSection:** Home version has the inspirational quote and "стати частиною команди" CTA. Vacancies page has "ЧАС ПЕРЕХОДИТИ НА НАСТУПНИЙ РІВЕНЬ." quote and "ЗАЛИШИТИ ЗАЯВКУ" CTA.

### 1.6 RecruitSection
- **Unique text (title):** "шлях рекрута"
- **6 numbered steps:**
  1. "ЗАПОВНЕННЯ АНКЕТИ"
  2. "СПІВБЕСІДА З РЕКРУТЕРАМИ"
  3. "ЗАРАХУВАННЯ ДО ПІДРОЗДІЛУ"
  4. "БАЗОВА ВІЙСЬКОВА ПІДГОТОВКА"
  5. "ФАХОВА ПІДГОТОВКА"
  6. "ВИКОНАННЯ ЗАВДАНЬ"
- **Visual:** numbered step cards (01–06), linear flow

### 1.7 SupportSection
- **Unique text (title):** "Підтримати"
- **Info:** "Збір на дрони - перехоплювачi." / "Ціль: 1 500 000 грн"
- **Payment tabs:** MONOBANK, КАРТКА, PAYPAL, РЕКВІЗИТИ
- **CTA:** "ПЕРЕГЛЯНУТИ ЗАКРИТІ ЗБОРИ"
- **Visual:** donation QR codes or payment cards

### 1.8 FaqSection
- **Unique text (title):** "FAQ"
- **Subtitle starts with:** "Якщо виникають додаткові запитання..."
- **Visual:** accordion-style expandable Q&A items (7 questions)

### 1.9 FormSection
- **Unique text (title):** "Долучитись"
- **Subtitle starts with:** "Твій перший крок на шляху до Фенікса..."
- **Form fields:** Ім'я, Телефон, radio buttons (Цивільний/Військовослужбовець/СЗЧ/Мобілізований/Інше), contact method (Телефон/Telegram/WhatsApp/Signal)
- **Submit:** "Надіслати"

---

## 2. ABOUT PAGE — `/about`

### 2.1 HeroSection
- **Unique text:** "крила, що спопеляють"
- **Meta label:** "ПРО ФЕНІКС"
- **CTA buttons:** "приєднатися" + "підтримати"
- **Visual:** surface theme (lighter), hero image of military operations

### 2.2 StatisticSection
- **Unique text (title):** "Фенікс сьогодні"
- **Stats:** "топ-2", "топ-3", "26500", "5130", "$ 2,2 Млрд"
- **Visual:** large stat numbers, only appears on About page

### 2.3 HistorySection
- **Unique text (title):** "ІСТОРІЯ"
- **Description starts with:** "Бойовий шлях трансформації від піхотного відділу..."
- **Year tabs:** 2022, 2023, 2024, 2025
- **Visual:** timeline-style layout with year selectors

### 2.4 EcosystemSection
- **Unique text (title):** "ЕКОСИСТЕМА"
- **Subtitle starts with:** "Ми створили цілісну структуру..."
- **3 items:**
  1. "ЛАБОРАТОРІЯ ДРОНІВ"
  2. "МАЙСТЕРНЯ З ВИГОТОВЛЕННЯ БК"
  3. "БАЗА ПІДГОТОВКИ ОПЕРАТОРІВ БПЛА"
- **Visual:** 3 cards with images of labs/workshops

### 2.5 ArsenalSection
- **Unique text (title):** "ОЗБРОЄННЯ"
- **Subtitle starts with:** "Полк Фенікс має найефективніші засоби..."
- **6 items:**
  1. "FPV ДРОНИ"
  2. "Квадрокоптери"
  3. "Важкі бомбери"
  4. "Перехоплювачі"
  5. "Ударні та розвідувальні крила"
  6. "Наземні Роботизовані Комплекси"
- **Visual:** weapon system cards with photos of drones/equipment

### 2.6 CommanderSection
- Same as Home 1.3 — "Дмитро Олексюк", "Земляк"

### 2.7 ValuesSection
- Same as Home 1.4 — 6 value cards

### 2.8 SupportSection
- Same as Home 1.7

### 2.9 FormSection
- Same as Home 1.9

---

## 3. CONTRACT 18-24 PAGE — `/contract`

### 3.1 HeroSection
- **Unique text:** "левел-ап твоєї молодості"
- **Meta label:** "контракт 18-24: дрони"
- **CTA:** "Залишити заявку"
- **Visual:** surface theme, young soldier imagery

### 3.2 ContractDetailsSection (AboutSection variant)
- **Unique text (title):** "УМОВИ КОНТРАКТУ"
- **Description starts with:** "Контракт 18-24: Дрони - це добровільна служба для громадян віком з 18 до 24 років..."
- **Key stats:** "2 роки", "4 місяці", "12 місяців"
- **Visual:** stat cards showing contract terms

### 3.3 BenefitsSection (ValuesSection variant)
- **Unique text (title):** "ЩО ТИ ОТРИМАЄШ?"
- **6 benefit cards:**
  1. "КОНТРАКТ НА 1 000 000 ГРН"
  2. "ГРОШОВЕ ЗАБЕЗПЕЧЕННЯ" (up to 120 000 грн/місяць)
  3. "МЕДИЧНЕ ЗАБЕЗПЕЧЕННЯ"
  4. "БЕЗКОШТОВНА ОСВІТА"
  5. "КОМПЕНСАЦІЯ ЖИТЛА"
  6. "ПРАВО НА ВІДСТРОЧКУ"
- **Visual:** numbered benefit cards (01–06)

### 3.4 JobsSection
- **Quote:** "Час переходити на наступний рівень."
- **Vacancy example:** "Інженер мережевих інтеграцій"

### 3.5 RecruitSection
- Same as Home 1.6

### 3.6 FaqSection
- Same structure, may have contract-specific questions

### 3.7 FormSection
- Same as Home 1.9

---

## 4. CONTACTS PAGE — `/contacts`

### 4.1 HeroSection
- **Unique text:** "ФЕНІКС НА ЗВʼЯЗКУ"
- **Meta label:** "КОНТАКТИ"
- **CTA:** "ПРИЄДНАТИСЯ"
- **Visual:** dark theme

### 4.2 ContactsSection
- **Unique text (title):** "КОНТАКТИ"
- **4 contact blocks:**
  1. **РЕКРУТИНГ** — phone numbers: +38 (095) 8888 011
  2. **НАПИСАТИ** — WhatsApp, Signal, Viber icons
  3. **МЕДІА** — PR@USFENIX.ARMY
  4. **СПІВПРАЦЯ** — INFO@USFENIX.ARMY
- **Visual:** 4-column contact grid, icons for each channel. This section is unique to the Contacts page.

### 4.3 FormSection
- **Title:** "ДОЛУЧИТИСЬ"
- **Subtitle:** "Залишай заявку та будь на звʼязку. Рекрутери Фенікса звʼяжуться з тобою."

---

## 5. DONATIONS PAGE — `/donations`

### 5.1 DonationsSection
- **Unique text (title):** "Закриті збори"
- **Description starts with:** "Кожен донат для нас неймовірно важливий..."
- **Campaign cards (3):** each with title, amount raised ("500 000 грн"), embedded video
- **Campaign examples:** "збір на реб", "збір на дрони перехоплювачі"
- **Visual:** video thumbnails, donation progress, surface theme. Unique to Donations/Fundraising pages.

### 5.2 SupportSection
- Same as Home 1.7

---

## 6. FUNDRAISING PAGE — `/fundraising`

- **Visually identical to Donations page** — same DonationsSection + SupportSection
- **Route difference:** `/fundraising` vs `/donations`
- **Note:** Both pages share the same content structure

---

## 7. VACANCIES PAGE — `/vacancies`

### 7.1 HeroSection
- **Unique text:** "ефективна реалізація твоїх скілів"
- **Meta label:** "вакансії у фенікс"
- **CTA buttons:** "приєднатися" + "підтримати"
- **Visual:** dark theme, military personnel imagery

### 7.2 JobsSection (full version)
- **Unique text (title):** "ВАКАНСІЇ"
- **Subtitle starts with:** "Готовий розпочати новий етап життя?..."
- **Category tabs:** БПЛА, НРК, РЕБ/РЕР, МАЙСТЕРНЯ, IT, ЗВʼЯЗОК, ТРАНСПОРТ, ШТАБ, ІНШЕ
- **16 vacancy listings** (cards with tags)
- **Quote:** "ЧАС ПЕРЕХОДИТИ НА НАСТУПНИЙ РІВЕНЬ."
- **CTA:** "ЗАЛИШИТИ ЗАЯВКУ"
- **How to distinguish from Home JobsSection:** More listings (16 vs fewer), different quote text, "ЗАЛИШИТИ ЗАЯВКУ" instead of "стати частиною команди"

### 7.3 RecruitSection
- Same as Home 1.6

### 7.4 FaqSection
- Same structure

### 7.5 FormSection
- Same as Home 1.9

---

## 8. VACANCY DETAIL PAGE — `/vacancy/:id`

### 8.1 VacancySection
- **Title varies** by position (e.g., "ІНЖЕНЕР МЕРЕЖЕВИХ ІНТЕГРАЦІЙ")
- **3 content blocks:**
  1. "ОБОВʼЯЗКИ" (Responsibilities) — bullet list
  2. "ВИМОГИ" (Requirements) — bullet list
  3. "УМОВИ" (Conditions) — bullet list with salary info ("від 50 000 грн")
- **CTA:** "ДОЛУЧИТИСЬ ДО КОМАНДИ"
- **Visual:** surface theme, structured text layout with 3 distinct blocks. Unique to this page type.

### 8.2 VacancyJobSection
- **Unique text (title):** "СХОЖІ ВАКАНСІЇ"
- **8 similar job cards**
- **CTA:** "ПЕРЕГЛЯНУТИ ВСІ ВАКАНСІЇ"
- **Visual:** horizontal scrollable cards

### 8.3 VacancyFormSection
- **Unique text (title):** "на звʼязку"
- **Subtitle starts with:** "Виникли додаткові питання?..."
- **Submit:** "Надіслати"

---

## 9. COOKIES PAGE — `/cookies`

### 9.1 PolicySection
- **Unique markers:** Cookie-related legal text
- **Title in content:** Cookie policy headings
- **Visual:** surface theme, solid header, long text content, no hero section
- **Language:** Ukrainian or English version

---

## 10. PRIVACY POLICY PAGE — `/policy`

### 10.1 PolicySection
- **Unique markers:** Privacy/data protection legal text
- **Visual:** surface theme, solid header, long text content, no hero section
- **Language:** Ukrainian or English version

---

## 11. 404 PAGE — `*`

- **Meta:** "ПОМИЛКА 404" (UA) / "ERROR 404" (EN)
- **Title:** "СТОРІНКУ НЕ ЗНАЙДЕНО" (UA) / "PAGE NOT FOUND" (EN)
- **CTA:** "ПЕРЕЙТИ НА ГОЛОВНУ СТОРІНКУ" / "BACK TO MAIN PAGE"
- **Visual:** minimal layout, error messaging

---

## GLOBAL ELEMENTS (present on all/most pages)

### Header / Navigation
- Logo "ФЕНІКС" (top-left)
- Nav links: Про нас, Контракт 18-24, Вакансії, Контакти
- Language switcher: UA / EN
- CTA button: "ДОЛУЧИТИСЬ" (top-right)

### Footer
- Social links: Telegram, Instagram, Facebook, TikTok, YouTube, X
- Legal links: Cookies, Policy
- Copyright text

### Cookie Banner
- Overlay popup about cookie consent

---

## SECTION DISAMBIGUATION GUIDE

Some sections appear on multiple pages. Use these rules to determine which page a screenshot belongs to:

| Section | Pages | How to Distinguish |
|---------|-------|-------------------|
| HeroSection | Home, About, Contract, Contacts, Vacancies | By hero title text (see Quick Reference Table above) |
| CommanderSection | Home, About | Check surrounding sections — About has StatisticSection/HistorySection nearby |
| ValuesSection | Home, About, Contract | On Contract it's titled "ЩО ТИ ОТРИМАЄШ?" with benefits. On Home/About it's "цінності" with organizational values |
| JobsSection | Home, Contract, Vacancies | Home: "стати частиною команди" CTA. Vacancies: "ЗАЛИШИТИ ЗАЯВКУ" CTA, 16 listings. Contract: "Час переходити на наступний рівень." |
| RecruitSection | Home, Contract, Vacancies | Identical across pages — check nearby sections for context |
| SupportSection | Home, About, Donations, Fundraising | Identical — check if DonationsSection ("Закриті збори") is above (Donations/Fundraising pages) |
| FaqSection | Home, About, Contract, Vacancies | Identical — use nearby sections for context |
| FormSection | Home, About, Contract, Contacts, Vacancies | On Contacts: subtitle mentions "Рекрутери Фенікса". On Vacancy detail: title is "на звʼязку" |

---

## THEME IDENTIFICATION

- **Dark theme** (dark background, light text): Home, Contacts, Vacancies
- **Surface theme** (light/grey background, dark text): About, Contract, Donations, Fundraising, Vacancy Detail, Cookies, Policy
