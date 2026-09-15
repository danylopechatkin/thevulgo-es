# SEO коммерческих страниц — отчёт по Фазе 1

## 1. Изменённые файлы

- `app/[locale]/page.tsx`
- `app/[locale]/handyman-valencia/page.tsx`
- `app/[locale]/montaje-tv-valencia/page.tsx`
- `app/[locale]/instalador-tv-valencia/page.tsx`
- `app/[locale]/instalador-tv-valencia/InstaladorTvClient.tsx`
- `app/[locale]/montaje-muebles-valencia/page.tsx`
- `app/[locale]/montaje-muebles-ikea-valencia/page.tsx`
- `app/[locale]/services/furniture/montaje-estanterias-valencia/page.tsx`
- `app/[locale]/services/furniture/instalacion-estanterias-valencia/page.tsx`
- `docs/seo-money-pages-baseline-2026-09.md`
- `docs/seo-money-pages-phase1-report.md`

## 2. Метаданные до и после

| Страница | До | После |
|---|---|---|
| Главная ES | Handyman en Valencia… | THEVULGO Valencia \| Montaje, instalaciones y reparaciones |
| Главная EN | Handyman in Valencia… | THEVULGO Valencia \| Home Installation & Repair Services |
| Handyman ES | Manitas en Valencia \| Montaje y Reparaciones… | Manitas en Valencia \| TV, muebles y reparaciones… |
| Handyman EN | Handyman in Valencia \| Assembly and Repairs… | English-Speaking Handyman in Valencia… |
| Основная TV ES | Montaje de TV en Valencia \| 49 €… | Montaje de TV en Valencia \| Instalación en pared… |
| Основная TV EN | TV Mounting in Valencia \| €49… | TV Mounting in Valencia \| Wall Installation… |
| TV installer | Общие метаданные locale layout | Собственные ES/EN title, description, self-canonical, hreflang и robots |
| Мебель ES/EN | Заголовок с упором на цену | Запрошенные коммерческие title и description общей услуги |
| IKEA ES/EN | Заголовок с упором на цену | Запрошенные title и description с акцентом на IKEA, PAX и KALLAX |

Готовые описания из задания использованы без изменения смысла. Все существующие canonical URL сохранены.

## 3. H1 до и после

- Handyman ES: `Manitas en Valencia para reparaciones y montaje` → `Manitas en Valencia para montaje y pequeñas reparaciones`.
- Handyman EN: `Handyman in Valencia for repairs and assembly` → `English-speaking handyman in Valencia`.
- Основная TV EN: испанский H1 → `TV Mounting in Valencia`; испанская версия осталась `Montaje de TV en Valencia`.
- Сборка стеллажей EN: испанский H1 → `Shelf and bookcase assembly in Valencia`.
- Настенные полки EN: испанский H1 → `Wall shelf installation in Valencia`.
- Остальные H1 сохранены там, где уже соответствовали поисковому интенту.

## 4. Внутренние ссылки

- На handyman-страницу добавлена прямая карточка IKEA. Ссылки на TV, мебель, настенные полки и карнизы ведут сразу на canonical-маршруты.
- Основная TV-страница теперь напрямую ссылается на установку кронштейна, большие TV, Samsung Frame, скрытие кабелей, soundbar и handyman.
- На странице IKEA разведены ссылки на общую сборку мебели, установку шкафов, сборку стеллажей и монтаж настенных полок.
- Ссылки с названием handyman больше не ведут на общий `/services`.
- Существующая индексируемая ссылка на handyman в десктопной и мобильной навигации сохранена.

## 5. Локализация

- Основная TV-страница локализована для EN: hero, преимущества, основной текст, кронштейны, типы стен, цены, зоны обслуживания, FAQ, связанные услуги, CTA, breadcrumbs и JSON-LD.
- На странице сборки стеллажей локализованы hero, преимущества, основной текст, список работ, типы стеллажей, цены, зоны, связанные ссылки и CTA.
- Исправлены английский hero/H1, schema и breadcrumbs страницы настенных полок.
- Корректная существующая локализация остальных страниц сохранена.

## 6. Структурированные данные

- Главная теперь описывается в Service и LocalBusiness как центр услуг по монтажу и ремонту в Валенсии. Offers и HomeAndConstructionBusiness сохранены.
- Service, LocalBusiness, FAQ и Breadcrumb основной TV-страницы теперь соответствуют выбранной локали.
- Service и breadcrumbs страницы настенных полок локализованы.
- Рейтинги, количество отзывов, гарантии и новые цены не добавлялись.

## 7. Sitemap

Архитектура sitemap не изменялась. Все обязательные URL остались в `app/sitemap.ts`.

## 8. Редиректы

Широкая консолидация маршрутов в Фазе 1 не выполнялась. `next.config.ts` не изменялся. Старые короткие URL полок по-прежнему выполняют один постоянный редирект сразу на вложенный canonical URL. Новые цепочки редиректов не появились.

## 9. ЦЕНОВЫЕ РАСХОЖДЕНИЯ ДЛЯ ПРОВЕРКИ

- Основная TV-страница показывает стандартную установку за 49 €.
- `colgar-tv-valencia`: 49 €, 59 € и 69 € по размеру TV; 79 € за поворотный кронштейн.
- `instalacion-soporte-tv-valencia`: 49 € фиксированный, 59 € наклонный, 79 € поворотный, 69 € для большого TV.
- `instalar-tv-pared-valencia` и `instalador-tv-valencia`: варианты от 49 € до 99 €.
- Различия могут быть обоснованы вариантами услуги, но формулировка основной страницы может восприниматься как единая цена. Цены и их логика не изменялись.

## 10. URL, сохранённые для предотвращения SEO-регрессии

Сохранены все указанные в задании URL главной, handyman, TV-кластера, специализированных TV-страниц, мебели, IKEA, полок и карнизов. Ни одна страница не удалена, не перенаправлена, не получила canonical на другой URL и не удалена из sitemap.

## 11. Production build

Production build успешно завершён с безопасными тестовыми значениями обязательных build-time переменных. Первый запуск без переменных ожидаемо остановился из-за отсутствия `RESEND_API_KEY`. Код интеграций не изменялся.

## 12. Lint

Полный lint блокируется девятью существовавшими ранее ошибками в `estimate/page.tsx`, `admin-login/page.tsx`, `api/send/route.ts` и `CitySwitcher.tsx`, а также прежними предупреждениями. В изменённых SEO-маршрутах новых lint-ошибок нет. TypeScript прошёл проверку.

## 13. Проверка URL

- Все 26 обязательных локализованных URL вернули HTTP 200 в локальной production-сборке.
- На каждой странице есть title, meta description, содержательный H1, self-canonical и index/follow.
- WhatsApp-ссылки сохранили номер `+34 610 076 942`; телефонные ссылки сохранены там, где уже отображались.
- Основная TV-страница проверена на desktop, handyman — на mobile. Переполнения hero нет, CTA видны, мобильная навигация и карточки помещаются на экран.
- Ошибок браузерной консоли и Next.js error overlay не обнаружено.
- Четыре старых коротких URL полок выполняют один 308-редирект непосредственно на вложенные canonical-маршруты.
- Все 32 автоматических теста прошли.

## 14. Нерешённые вопросы

- `montaje-tv-grande-valencia` имеет английские метаданные, но H1 и основной контент английского URL остаются на испанском. По заданию эта специализированная страница подлежала проверке, но не полному переписыванию.
- На английской странице настенных полок исправлены hero и SEO-сигналы, однако в нижней части остаётся прежний испанский текст. Рекомендуется отдельный проход, ограниченный локализацией.
- Общий lint-долг репозитория не относится к этой консервативной SEO-задаче и не изменялся.
- Фаза 2 по консолидации TV-кластера остаётся только аналитической и требует отдельного согласования после периода наблюдения в Search Console.
