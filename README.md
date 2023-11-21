# Time of your Life

## Description

Time of Your Life is a project that will always be in "progress".  It's got a little bit of a start, but is intentionally left with need of feature implementations to get it to an [MVP] state.

## TODOs

### Easier

#### Client

- [ ] Make the title of the clock customizable

- [ ] Make a return character in the text settings fields save the field property value

- [ ] Add validation to the text input fields

- [ ] Display the list of the presets saved on the server served from this endpoint:

  `GET: https://localhost:7154/clock/presets`

- [ ] Add sync to the server time

#### Server

- [ ] Add preset save validation
- [ ] Add a unique identifier for a preset either an auto number value or a GUID
- [ ] Add sync to the server time

### Medium-er

#### Client

- [ ] Make the clock `Set Clock Props` panel expandable and collapsible
- [ ] Make the font size selection a slider control
- [ ] Make the colors of the title and the clock different color values
- [ ] Save the presets to the server at this endpoint:
  `POST: https://localhost:7154/clock/presets`
- [ ] Select a preset from the list saved on the server to replace the current values and update the clock
- [ ] Add unit tests

#### Server

- [ ] Return a preset by the title ID
- [ ] Add the ability to update existing presets with changes in values
- [ ] Add unit tests

### Harder

#### Client

- [ ] Add a color picker to select the font colors for multiple colors
- [ ] Add the ability to print the time out in text, i.e. "1:32 PM" would be printed out as "one thirty two PM"
- [ ] Add an alarms control/presets
- [ ] Add a testing results output report

#### Server

- [ ] Implement a [sqlite] database storage layer
- [ ] Save alarms and populat the alarms on the clock
- [ ] Add a testing results output report

<!-- links -->

[MVP]: https://www.agilealliance.org/glossary/mvp/ "AGILE GLOSSARY: Minimum Viable Product (MVP)"
[sqlite]: https://www.sqlite.org/index.html "What Is SQLite"
