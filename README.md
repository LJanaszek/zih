# Słonimscy, gra terenowa

## Środowisko developerskie

Wymagane oprogramowanie:
- `nodejs` używana wersja - `18.17.1`
- `yarn` używana wersja - `1.22.22`

Po skolowaniu repozytorium należy zaistalować zależności komendą `yarn`

## Scripts

- `yarn start` - start developer server
- `yarn build` - build projects (result in `/build`)

## Branche

* `master` - produkcyjna bezpieczna wersja kodu
* `develop` - aktualna wersja kodu z zatwierdzonymi zmianami (stąd zaczynamy pisanie nowych funkcjonalności)
* `feature/*` - brancze z poszczególnymi funkcjonalnościami/zadaniami

## Mechaniki zadań przeniesionych z innych projketów

### Zadanie 6 - 15-stka

W projekcie jest podstawowy kod do zadania w plikach:
* `src\components\task-widgets\puzzle\puzzle.tsx` - skrypt widgetu.

W pliku należy podmienić ścieżki do grafik i ewentualnie zmienić startowe ustawienie elementów

# GD Events Geo Game Template

To jest podstawowy szablon to tworzenie stron www/gier z wykożystaniem geolokalizacji.


## Deploy

Bo wykonaniu polecenia `yarn build` zawartość katalogu `/buid` należy wgrać na serwer.
Szablon jest przestosowany do działania w głównym katalogu domeny!

## Cechy/Ogranicznia

- wynikiem generacji jest statyczna strona SPA
- progres gry zapisywany jest lokalnie na urządzeniu gracza (`localStorage`)
- brak komunikacji z serwerem (brak logowanie, zapisytwania wyników itp.)
- strona działa tylko na `localhost` lub na serwerze z zaufanym certyfikatem SSL (inaczej nie ma dostępu do geolokalizacji)
- aby gra działała urządzenie musi zwracać odczyć GPS o określonej dokłądości (domyślnie 40m) `src/config.ts`
- mapy Google użyta w projekcie jest tylko do celów developerskich/testowych - jeżeli ktoś chce użyć jej produkcyjnie trzeba połaćzy ją z jakimś płacącym kontem Google
- szablon nie ma aktualnie żadnych elementów dostosowanych do spełniania wymogówe WCAG itp.

## Jak używać tego szablonu

1. Stworzyć nowe repozytoriu na bazie tego
2. Zedytować scenariusz gry
3. ...zrobić resztę :)

## Scenariusz

Podstawowy scenariusz gry skłąda się z kroków.

Każdy krok ma zdefiowane parametry:

- `id` - unikalne ID kroku
- `type` - typ kroku (patrz niżej)
- `nextStep` - krok do którego przechodzimy jak zaliczym bierzący krok.

Na starcie mamy 3 typy kroków i mają swoje specjalne parametry:

| Typ                             | Opis                                                                                           | Specjalne parametry                                                                                                                                      |
| ------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GAME_STEP_TYPE.PAGE`           | Zwykła statyczna strona                                                                        | `pageId`                                                                                                                                                 |
| `GAME_STEP_TYPE.TASK`           | Zadanie do wykonania przez gracza. Przykłądowe składają się z 3 widoków: Intro, Zadanie, Outro | `taskId`                                                                                                                                                 |
| `GAME_STEP_TYPE.GEO_STEP`       | Zadanie polegające na dojści do punktu w terenie                                               | `name` - nazwa punktu (np. adres) <br/> `position` - współrzędne geograficzne punktu                                                                     |
| `GAME_STEP_TYPE.MULTI_GEO_STEP` | Zadanie polegające na dojścio do jednego z punktów geograficznych                              | `stepsId` - id punktów typu `GEO_STEP` które zaliczają siędo tego punktu <br /> `minVisitedPoints` - ile punktów gracz musi znaleśćaby zaliczyć ten krok |

### Jak działają kroki `GAME_STEP_TYPE.MULTI_GEO_STEP`

W czasie gdy gra jest w kroku typu `GAME_STEP_TYPE.MULTI_GEO_STEP` aplikacji śledzi położenie gracza względem wszytkich punktów zawartych w tablicy `stepsId`.
Jak user dojdzie dop kótregoś z tych punktów to aplikacja przechodzi do kroku określonego jako `nextStep` punktu do którego doszedł, oraz oznaczy ten punkt jako znaleziony.
Jeżeli aplikacja wróci do stanu `GAME_STEP_TYPE.MULTI_GEO_STEP` i user znalazł odpowiednią ilość punktów przechodzimy do `nextStep` zdefiniowanego przy `GAME_STEP_TYPE.MULTI_GEO_STEP`

## Użyte technologie i biblioteki

- [ReactJS](https://reactjs.org/) + [react-router](https://reactrouter.com/) - podstawa strony
- [sass](https://sass-lang.com/) - do styli globalnych
- [style-components](https://styled-components.com/) - do styli komponentów
- [react-use-form](https://react-hook-form.com/) - do obsługi formularzy
- [react-query](https://react-query.tanstack.com/) + [axios](https://axios-http.com/) - do zapytań HTTP (nie używane w podstawowym szablonie)

## Istotne pliki i katalogi

| ścieżka                                       | opis                                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `/src/app.tsx`                                | tutaj jest router głownej aplikacji                                                                                       |
| `/src/config.ts`                              | podstawowa konfiguracja aplikacji                                                                                         |
| `/src/style.scss`                             | główne style strony                                                                                                       |
| `/src/assets`                                 | tutaj wrzucamy assety które później będą importowane w kodzie (główne grafiki, ikonki itp)                                |
| `/src/modules/game/scenario.ts`               | **scenariusz gry**                                                                                                        |
| `/public`                                     | tutaj wrzucamy statyczne pliki które nie będą importowane w kodzie ale mają być dostępne na serwerze aplikacji (np. PDFy) |
| `/src/components`                             | katalog z komponentami wsółdzielonymi między widokami                                                                     |
| `/src/routes`                                 | katalog z komponentami konkretnych widoków                                                                                |
| `/src/routes/routes.ts`                       | tutaj są funkcje generujące adresy widoków                                                                                |
| `/src/home/index.tsx`                         | strona główna                                                                                                             |
| `/src/routes/policy/index.tsx`                | strona z polityką prywatności                                                                                             |
| `/src/routes/routes/rules/index.tsx`          | strona z zasadami gry                                                                                                     |
| `/src/routes/game/index.tsx`                  | główna strona gry - decyduje jaki tym widoku gry powinien być wyświetlony                                                 |
| `/src/routes/game/page/index.tsx`             | router decydujący którą stronę pokazać                                                                                    |
| `/src/routes/game/page/**`                    | katalogi z poszczególnymi stronami                                                                                        |
| `/src/routes/task/index.tsx`                  | router decydujący którye zadanie pokazać                                                                                  |
| `/src/routes/task/**`                         | katalogi z poszczególnymi zadaniami                                                                                       |
| `/src/routes/compass-view/single/content.tsx` | ekran kroku z pojedynczym punktem geo                                                                                     |
| `/src/routes/compass-view/multi/content.tsx`  | ekran kroku z wieloma punktami geo                                                                                        |

## Debug mode

Aplikacja zawiera w sobie podstawowy tryb developerski pomagający przy pisaniu i testowaniu.

Aby go właczyć należy wejść na stronę:
`/debug-on`

Aby wyłączyć należy wejśc na stronę:
`/debug-off`

### Game testing tools

Zestaw narzędzi widoczny na kazdym ekranie gry.

#### Funkcje
- wyswitla dane o aktualnym kroku gry i listę znalezionych punktów geo
- pozwala przejść do dowolnego kroku gry
- reset stanu gry

### Compass Dev Tools

Zestaw narzedzi widoczny na ekranach gry z kompasem.

#### Funkcje
- symuluje doście do któregoś z aktualnie śledzonych punktów geo - realnie przesuwa ten punkt pod nogi gracza
- pokazuje mapę google z zanaczonymi punktami
- pozwala na ignorowanie wymogu minimalnej dokładności odczytu GPS.
- resetuje położenie punktów geo i rozstawia je wokół gracza

---

## Przydasie

* `/src/utils/store/index.tsx` - scrypt do generacji magazynu danych przykład użycia: `/src/modules/main`
* `/src/utils/widgets/center-on-me.tsx` - widget do przewijania strony tak aby widget był na środku ekranu
* `/src/utils/widgets/scroll-to-me.tsx` - widget do przewijania strony tak aby widget był na góze ekranu
* `/src/utils/widgets/scroll-to-top.tsx` - widget do przewijania strony do góry

---

## Problemy

### Importowanie plików SVG

Aktualnie konfiguracja `react-scripts` uniemożliwia importowanie niektórych plików SVG.
Aby to ominąć należy wymusić użycie `!file-loader!` i zignorować błędy `eslinta` dla kodu:

```tsx
// eslint-disable-next-line
import raszynLogoRed from '!file-loader!path_to_file.svg'
```
