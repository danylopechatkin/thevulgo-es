# Аудит публичных цен THEVULGO

## Результат

Из исходных данных и публичных текстов ES/EN удалены ценовые префиксы Desde, A partir de, From, Starting at/from и отдельные налоговые пояснения. CSS-скрытие не используется. URL, набор страниц и числовые цены не менялись.

## Источники

- `lib/serviceCatalog.ts`: 250 услуг, цены, пакеты, локализованные подписи и модификаторы.
- `lib/public-pricing.ts`: новый общий форматтер ES/EN и расчёт суммы в центах.
- `messages/es.json`, `messages/en.json`: локализованные подписи калькулятора и страниц.
- `lib/guides.ts`, `lib/acSeoContent.ts`: генераторы руководств и SEO-контента кондиционеров.
- `app/[locale]/**`: главная, категории, услуги, локальные страницы, FAQ, metadata, OpenGraph, Twitter и JSON-LD; многие страницы содержат собственные литералы, поэтому исправлены все эти источники.
- `app/components/SmallJobLanding.tsx`, форма вентиляторов и калькулятор: повторно используемые компоненты цен.
- `app/api/send/route.ts`, `lib/estimate.ts`: серверная обработка заявки и расчёт котировки.

## Расчёт

`total = сумма(price × qty) + явно переданные реальные доплаты`. Суммы округляются до центов. Например, TV 49 € + canaleta 25 € = 74 €. Отдельных строк Subtotal/IVA/Tax в публичном summary нет. API заново вычисляет итог и суммы строк по услугам, а не принимает готовый итог браузера.

Публичный калькулятор и API до этого изменения уже использовали нулевой IVA. Однако общий `calculateQuote` мог прибавлять налог из `SPAIN_TAX_RATE`; теперь он всегда возвращает нулевой налог. Его существующий минимум выезда 49 € сохранён. Сам публичный калькулятор этот helper не вызывает. CRM-функция `getTaxRate()` и административный учёт не изменены.

## Сохранение прайса

Регрессионный тест фиксирует все 250 пар ID/price каталога. Они совпадают с исходной веткой. TV остаётся 49; пакеты вентиляторов — 45/85/125. Сравнение всех литералов с суммами в евро в изменённых файлах не выявило изменения чисел. Сохранены +pieza/+equipo, /m, количества и реальные дополнительные услуги. Услуги по запросу сохраняют Presupuesto/Quote.

## Оставшиеся совпадения

- `app/api/send/route.ts`: поле `iva = 0` для совместимости существующих записей; оно не прибавляется к итогу.
- `lib/estimate.ts`: внутренние поля tax/taxRate с нулевыми значениями публичной котировки; getTaxRate оставлен для CRM.
- `lib/order-email-data.ts` и административные обработчики: внутренний бухгалтерский учёт заказов.
- Тесты содержат запрещённые слова специально для проверки отсутствия в публичных исходниках.
- Обычный английский предлог from (например, from photos), импорты и существующие идентификаторы/URL не удалялись. Ценовых префиксов From € нет.
- Неиспользуемый `page.tax` также очищен, но не переименован в страницу и не создаёт нового URL.

## Проверки

- `npm test`: 27 тестов прошли, включая пять новых тестов публичных цен.
- Production build и TypeScript прошли. Для локальной сборки использованы фиктивные ключи Resend/Supabase; реальные письма и заказы не отправлялись.
- ESLint сравнён с исходной веткой: 6 существовавших ошибок, новых замечаний нет.
- Исходники публичных страниц, компонентов, переводов и генераторов проверяются AST-тестом на запрещённые ценовые формулировки.
- Обход 422 адресов ES/EN: 416 успешных ответов после учёта существующих переадресаций; 406 страниц содержат валидный JSON-LD. В проверенном HTML, метаданных и JSON-LD запрещённые формулировки не найдены.
- Шесть дополнительных городских адресов в локальной production-сборке возвращают DYNAMIC_SERVER_USAGE/500. Их генераторы не изменены этим обновлением; это ограничение локальной проверки, а не подтверждённая успешная проверка этих адресов. Контрольный запрос к действующему www.thevulgo.es/es/madrid/services/instalacion-ventilador-techo до публикации также вернул 500; основная страница вентиляторов вернула 200.
- Браузер: ES/EN, desktop 1280×720 и mobile 390×844; TV + canaleta дают 74 €, горизонтального переполнения нет. Сумма и знак валюты защищены от переноса.
- Числовые Offer.price сохранены. AggregateOffer/lowPrice, требующих замены, не найдено.

## Изменённые файлы

- `app/[locale]/cambio-enchufe-valencia/page.tsx`
- `app/[locale]/cambio-interruptor-valencia/page.tsx`
- `app/[locale]/cambio-lampara-techo-valencia/page.tsx`
- `app/[locale]/colgar-cuadros-valencia/page.tsx`
- `app/[locale]/colgar-espejos-valencia/page.tsx`
- `app/[locale]/colgar-tv-valencia/page.tsx`
- `app/[locale]/contratista-pladur-valencia/page.tsx`
- `app/[locale]/electricista-valencia/page.tsx`
- `app/[locale]/empresa-pladur-valencia/page.tsx`
- `app/[locale]/estimate/page.tsx`
- `app/[locale]/falso-techo-pladur-valencia/page.tsx`
- `app/[locale]/falsos-techos-valencia/page.tsx`
- `app/[locale]/guias/guides-data.ts`
- `app/[locale]/handyman-benimaclet/page.tsx`
- `app/[locale]/handyman-campanar/page.tsx`
- `app/[locale]/handyman-mislata/page.tsx`
- `app/[locale]/handyman-paterna/page.tsx`
- `app/[locale]/handyman-patraix/page.tsx`
- `app/[locale]/handyman-russafa/page.tsx`
- `app/[locale]/handyman-valencia/page.tsx`
- `app/[locale]/home-cinema-valencia/page.tsx`
- `app/[locale]/instalacion-armarios-valencia/page.tsx`
- `app/[locale]/instalacion-barras-cortina-valencia/page.tsx`
- `app/[locale]/instalacion-lampara-valencia/page.tsx`
- `app/[locale]/instalacion-lamparas-colgantes-valencia/page.tsx`
- `app/[locale]/instalacion-pladur-valencia/page.tsx`
- `app/[locale]/instalacion-proyectores-valencia/page.tsx`
- `app/[locale]/instalacion-soporte-tv-valencia/page.tsx`
- `app/[locale]/instalador-pladur-valencia/page.tsx`
- `app/[locale]/instalador-tv-valencia/page.tsx`
- `app/[locale]/instalar-lampara-valencia/page.tsx`
- `app/[locale]/instalar-proyector-techo-valencia/page.tsx`
- `app/[locale]/instalar-samsung-frame-valencia/page.tsx`
- `app/[locale]/instalar-tv-pared-valencia/page.tsx`
- `app/[locale]/montaje-armario-valencia/page.tsx`
- `app/[locale]/montaje-muebles-ikea-valencia/page.tsx`
- `app/[locale]/montaje-muebles-valencia/page.tsx`
- `app/[locale]/montaje-proyector-valencia/page.tsx`
- `app/[locale]/montaje-tv-65-pulgadas-valencia/page.tsx`
- `app/[locale]/montaje-tv-75-pulgadas-valencia/page.tsx`
- `app/[locale]/montaje-tv-85-pulgadas-valencia/page.tsx`
- `app/[locale]/montaje-tv-98-pulgadas-valencia/page.tsx`
- `app/[locale]/montaje-tv-samsung-frame-valencia/page.tsx`
- `app/[locale]/montaje-tv-valencia/page.tsx`
- `app/[locale]/ocultar-cables-valencia/page.tsx`
- `app/[locale]/pintar-pladur-valencia/page.tsx`
- `app/[locale]/pladur-valencia/page.tsx`
- `app/[locale]/presupuesto-pladur-valencia/page.tsx`
- `app/[locale]/reformas-pladur-valencia/page.tsx`
- `app/[locale]/reparacion-pladur-valencia/page.tsx`
- `app/[locale]/services/aire-acondicionado/page.tsx`
- `app/[locale]/services/alarmas/page.tsx`
- `app/[locale]/services/bathroom/BathroomClient.tsx`
- `app/[locale]/services/bathroom/accessory-installation/page.tsx`
- `app/[locale]/services/bathroom/cabinet-door-alignment/page.tsx`
- `app/[locale]/services/bathroom/cabinet-installation-valencia/page.tsx`
- `app/[locale]/services/bathroom/glass-shelf-installation/page.tsx`
- `app/[locale]/services/bathroom/mirror-cabinet-fitting-valencia/page.tsx`
- `app/[locale]/services/bathroom/mirror-installation-valencia/page.tsx`
- `app/[locale]/services/bathroom/seal-gap-fixing/page.tsx`
- `app/[locale]/services/bathroom/shelf-installation-valencia/page.tsx`
- `app/[locale]/services/bathroom/shower-head-replacement/page.tsx`
- `app/[locale]/services/bathroom/shower-hose-replacement/page.tsx`
- `app/[locale]/services/bathroom/silicone-renewal/page.tsx`
- `app/[locale]/services/bathroom/toilet-paper-holder-installation-valencia/page.tsx`
- `app/[locale]/services/bathroom/towel-holder-installation-valencia/page.tsx`
- `app/[locale]/services/bathroom/vanity-light-installation/page.tsx`
- `app/[locale]/services/bathroom/vanity-unit-installation-valencia/page.tsx`
- `app/[locale]/services/bathroom/wall-mounting/page.tsx`
- `app/[locale]/services/cambio-lampara-por-ventilador/page.tsx`
- `app/[locale]/services/cctv/page.tsx`
- `app/[locale]/services/control-de-acceso/page.tsx`
- `app/[locale]/services/devolver-piso-propietario-valencia/page.tsx`
- `app/[locale]/services/doors/DoorsClient.tsx`
- `app/[locale]/services/doors/ajuste-cierrapuertas/page.tsx`
- `app/[locale]/services/doors/cambio-bisagras-puerta/page.tsx`
- `app/[locale]/services/doors/cambio-bombin-cerradura/page.tsx`
- `app/[locale]/services/doors/door-alignment-adjustment/page.tsx`
- `app/[locale]/services/doors/door-seal-replacement/page.tsx`
- `app/[locale]/services/doors/handle-replacement/page.tsx`
- `app/[locale]/services/doors/herrajes-puertas-interiores/page.tsx`
- `app/[locale]/services/doors/hinge-tightening/page.tsx`
- `app/[locale]/services/doors/instalacion-tope-puerta/page.tsx`
- `app/[locale]/services/doors/latch-adjustment/page.tsx`
- `app/[locale]/services/doors/loose-handle-fixing/page.tsx`
- `app/[locale]/services/doors/strike-plate-adjustment/page.tax`
- `app/[locale]/services/drywall/DrywallClient.tsx`
- `app/[locale]/services/drywall/anchor-hole-repair/page.tsx`
- `app/[locale]/services/drywall/cable-hole-closing/page.tsx`
- `app/[locale]/services/drywall/ceiling-spot-patching/page.tsx`
- `app/[locale]/services/drywall/concrete-wall-drilling/page.tsx`
- `app/[locale]/services/drywall/corner-repair/page.tsx`
- `app/[locale]/services/drywall/crack-filling/page.tsx`
- `app/[locale]/services/drywall/door-handle-wall-damage-repair/page.tsx`
- `app/[locale]/services/drywall/drywall-cutout-repair/page.tsx`
- `app/[locale]/services/drywall/drywall-mounting-prep/page.tsx`
- `app/[locale]/services/drywall/large-drywall-patch/page.tsx`
- `app/[locale]/services/drywall/medium-wall-patching/page.tsx`
- `app/[locale]/services/drywall/patch-and-sand-finish/page.tsx`
- `app/[locale]/services/drywall/shelf-removal-wall-repair/page.tsx`
- `app/[locale]/services/drywall/skim-coat-area-repair/page.tsx`
- `app/[locale]/services/drywall/small-hole-repair/page.tsx`
- `app/[locale]/services/drywall/tv-bracket-wall-repair/page.tsx`
- `app/[locale]/services/drywall/wall-drilling-service/page.tsx`
- `app/[locale]/services/drywall/wall-levelling-prep/page.tsx`
- `app/[locale]/services/drywall/wall-touch-up-prep/page.tsx`
- `app/[locale]/services/electrical/ElectricalClient.tsx`
- `app/[locale]/services/electrical/cambio-extractor-valencia/page.tsx`
- `app/[locale]/services/electrical/cambio-luz-bano-valencia/page.tsx`
- `app/[locale]/services/electrical/instalacion-apliques-pared-valencia/page.tsx`
- `app/[locale]/services/electrical/instalacion-tira-led-valencia/page.tsx`
- `app/[locale]/services/electrical/montaje-electrico-basico-valencia/page.tsx`
- `app/[locale]/services/exterior/ExteriorClient.tsx`
- `app/[locale]/services/exterior/ajuste-accesorios-pergola-sombra/page.tsx`
- `app/[locale]/services/exterior/ajuste-porton-exterio/page.tsx`
- `app/[locale]/services/exterior/instalacion-soportes-exteriores/page.tsx`
- `app/[locale]/services/exterior/montaje-pared-exterior/page.tsx`
- `app/[locale]/services/exterior/reparacion-ajuste-vallas/page.tsx`
- `app/[locale]/services/exterior/reparacion-herrajes-exterior/page.tsx`
- `app/[locale]/services/exterior/retoques-fachada/page.tsx`
- `app/[locale]/services/exterior/sellado-impermeable-exterior/page.tsx`
- `app/[locale]/services/fin-contrato-alquiler-valencia/page.tsx`
- `app/[locale]/services/furniture/FurnitureClient.tsx`
- `app/[locale]/services/furniture/fijacion-muebles-pared-valencia/page.tsx`
- `app/[locale]/services/furniture/montaje-aparadores-muebles-auxiliares-valencia/page.tsx`
- `app/[locale]/services/furniture/montaje-cama-valencia/page.tsx`
- `app/[locale]/services/furniture/montaje-comodas-cajoneras-valencia/page.tsx`
- `app/[locale]/services/furniture/montaje-escritorios-valencia/page.tsx`
- `app/[locale]/services/furniture/montaje-estanterias-valencia/page.tsx`
- `app/[locale]/services/furniture/montaje-mesas-comedor-valencia/page.tsx`
- `app/[locale]/services/furniture/montaje-muebles-tv-multimedia-valencia/page.tsx`
- `app/[locale]/services/furniture/montaje-sofas-modulares-valencia/page.tsx`
- `app/[locale]/services/furniture/preparacion-muebles-mudanza-valencia/page.tsx`
- `app/[locale]/services/handyman-airbnb-valencia/page.tsx`
- `app/[locale]/services/instalacion-toldo-balcon-valencia/page.tsx`
- `app/[locale]/services/instalacion-toldo-electrico-valencia/page.tsx`
- `app/[locale]/services/instalacion-toldo-leroy-merlin-valencia/page.tsx`
- `app/[locale]/services/instalacion-toldo-manual-valencia/page.tsx`
- `app/[locale]/services/instalacion-toldo-patio-valencia/page.tsx`
- `app/[locale]/services/instalacion-toldo-terraza-valencia/page.tsx`
- `app/[locale]/services/instalacion-toldos-valencia/page.tsx`
- `app/[locale]/services/instalacion-ventilador-control-remoto/page.tsx`
- `app/[locale]/services/instalacion-ventilador-smart/page.tsx`
- `app/[locale]/services/instalacion-ventilador-techo-valencia/FanLeadForm.tsx`
- `app/[locale]/services/instalacion-ventilador-techo-valencia/StickyFanQuoteButton.tsx`
- `app/[locale]/services/instalacion-ventilador-techo-valencia/page.tsx`
- `app/[locale]/services/instalador-toldos-valencia/page.tsx`
- `app/[locale]/services/instalar-toldo-valencia/page.tsx`
- `app/[locale]/services/instalar-ventilador-techo/page.tsx`
- `app/[locale]/services/kitchen/KitchenClient.tsx`
- `app/[locale]/services/manitas-instalacion-toldos-valencia/page.tsx`
- `app/[locale]/services/mantenimiento-airbnb-valencia/page.tsx`
- `app/[locale]/services/montaje-toldo-leroy-merlin-valencia/page.tsx`
- `app/[locale]/services/montaje-toldos-valencia/page.tsx`
- `app/[locale]/services/montaje-ventilador-techo/page.tsx`
- `app/[locale]/services/move-in/MoveInClient.tsx`
- `app/[locale]/services/pequenas-reparaciones-valencia/page.tsx`
- `app/[locale]/services/plumbing/PlumbingClient.tsx`
- `app/[locale]/services/puesta-a-punto-piso-valencia/page.tsx`
- `app/[locale]/services/puesta-a-punto-vivienda-valencia/page.tsx`
- `app/[locale]/services/redes/page.tsx`
- `app/[locale]/services/reemplazo-ventilador-techo/page.tsx`
- `app/[locale]/services/repairs/RepairsClient.tsx`
- `app/[locale]/services/repairs/bathroom-accessory-fixing/page.tsx`
- `app/[locale]/services/repairs/cabinet-door-alignment/page.tsx`
- `app/[locale]/services/repairs/curtain-rail-adjustments/page.tsx`
- `app/[locale]/services/repairs/door-adjustment/page.tsx`
- `app/[locale]/services/repairs/furniture-touch-up-fixes/page.tsx`
- `app/[locale]/services/repairs/kitchen-minor-fixes/page.tsx`
- `app/[locale]/services/repairs/loose-handle-fixing/page.tsx`
- `app/[locale]/services/repairs/minor-wall-fixes/page.tsx`
- `app/[locale]/services/repairs/mirror-remounting/page.tsx`
- `app/[locale]/services/repairs/move-out-touch-ups/page.tsx`
- `app/[locale]/services/repairs/sealing-gap-filling/page.tsx`
- `app/[locale]/services/repairs/shelf-refixing/page.tsx`
- `app/[locale]/services/repairs/small-drilling-jobs/page.tsx`
- `app/[locale]/services/repairs/socket-cover-straightening/page.tsx`
- `app/[locale]/services/repairs/wall-anchor-installation/page.tsx`
- `app/[locale]/services/reparacion-agujeros-pared-valencia/page.tsx`
- `app/[locale]/services/reparacion-paredes-valencia/page.tsx`
- `app/[locale]/services/reparacion-piso-alquiler-valencia/page.tsx`
- `app/[locale]/services/reparaciones-airbnb-valencia/page.tsx`
- `app/[locale]/services/reparaciones-antes-entrega-piso-valencia/page.tsx`
- `app/[locale]/services/retoques-pintura-valencia/page.tsx`
- `app/[locale]/services/seguridad-comercial/page.tsx`
- `app/[locale]/services/smart-home/SmartHomeClient.tsx`
- `app/[locale]/services/starlink/page.tsx`
- `app/[locale]/services/tv-mounting/TvMountingClient.tsx`
- `app/[locale]/services/ventilador-techo-con-luz/page.tsx`
- `app/[locale]/tabiques-pladur-valencia/page.tsx`
- `app/[locale]/techo-registrable-valencia/page.tsx`
- `app/[locale]/techos-pladur-valencia/page.tsx`
- `app/api/send/route.ts`
- `app/components/SmallJobLanding.tsx`
- `docs/public-pricing-audit.md`
- `lib/acSeoContent.ts`
- `lib/estimate.ts`
- `lib/guides.ts`
- `lib/public-pricing.ts`
- `lib/serviceCatalog.ts`
- `messages/en.json`
- `messages/es.json`
- `tests/public-pricing.test.ts`
