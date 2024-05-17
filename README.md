# Time of your Life

## Description

Time of Your Life is a project that will always be in "progress".  It's got a little bit of a start, but is intentionally left with need of feature implementations to get it to an [MVP] state.

The Time of Your Life project is designed to be a starting point for developers to show what kind of skills they've picked up over time.  There are many different enhancements suggested for this project.  They allow a developer to give a good idea of their ability to handle data design, backend components or client-side interface development tasks.

While it is important to see what kind of quality features and improvements a developer can add,  it is just as important to show a consistent commit history with clear concise commit comments in either a fork or branch of this repository. Seeing how a developer works over time provides a lot of insight into their experience and ability to work through coding problems.

This project was bootstrapped with [Create React App].  It uses a [.Net 8] Web Application to host a [React JS] framework client.

## How to Develop

Time of Your Life is built on these technologies:

- [.NET 8]
- [React JS]

To develop on this project clone this project, and open with an IDE of your choice. VS Code or Visual Studio 2019 or newer is recommended.

Update your database with `dotnet ef database update`

The project can be run from the command line using the command `dotnet run`.  The service and application hosting can be stopped by pressing `Ctrl+C` on Windows and Linux, or `Cmd+C` on macOS.

Changes to the React Client Side SPA, will be reflected in the UI in a hot load manner. Changes to the .Net server components will require a recompile, `dotnet build` and restart, `dotnet run`.

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
- [ ] Add `ClockController` logging

### Harder

#### Client

- [ ] Add a color picker to select the font colors for multiple colors
- [ ] Add the ability to print the time out in text, i.e. "1:32 PM" would be printed out as "one thirty two PM"
- [ ] Add an alarms control/presets
- [ ] Add a testing results output report
- [ ] Add time zone to the preset and/or be able display multiple clocks/presets at the same time

#### Server

- [ ] Implement a [sqlite] database storage layer
- [ ] Save alarms and populate the alarms on the clock
- [ ] Add a testing results output report
- [ ] Add time zone to the preset and/or be able display multiple clocks/presets at the same time

<!-- links -->

[Create React App]: https://github.com/facebookincubator/create-react-app "Create React App"
[MVP]: https://www.agilealliance.org/glossary/mvp/ "AGILE GLOSSARY: Minimum Viable Product (MVP)"
[sqlite]: https://www.sqlite.org/index.html "What Is SQLite"
[.NET 8]: https://dotnet.microsoft.com/en-us/download "Download .NET"
[React JS]: https://react.dev/ "React: The library for web and native user interfaces"
