# Change Log
## [2.0.0] - 02/06/2021
### Added
- Change tasker services, working places,

### Improvement
- Speed up tasker searching
- Add created_at field when create a FATransaction
## [2.0.0] - 31/05/2021
### Improvement
- Change task posted to Pub/sub 
- Show date of request payout in tasker-detail-finance
## [2.0.0] - 28/05/2021
### Added
- View list tasker receive/not-receive monthly reward
## [2.0.0] - 27/05/2021
### Added
- View list taskers have birthday in month
- View/Search promotion code used by asker
## [2.0.0] - 26/05/2021
### Added
- Add facebook link into profile of Taskers
- Filter by first/last date of working of Subscriptions

### Fixed
- show update time if empty string if task do not have any update action
## [2.0.0] - 24/05/2021
### Added
- Lists all taskers has done tasker smaller than a NUMBER

### Improve
- Replace evergreen-ui by ANTD
## [2.0.0] - 13/05/2021
### Added
- Reword UI of tasker calendar
### Improve
- Update npm version and fix some vulnerabilities
## [2.0.0] - 11/05/2021
### Added
- Report working hours of taskers
- Report speed of accept task of taskers

## [2.0.0] - 27/04/2021
### Fixed
- Allow 5 minutes incremental of time picker (task), dropped 5-8 of duration
- Cancel task report error messing of cancelledAt
### Improve
- City filter for tasks
- Seach by id number of taskers
- Show more info in task table
## [2.0.0] - 23/04/2021
### Fixed
- Crash when search text is empty
- Change $last operator, using $arrayElemAt

## [2.0.0] - 14/04/2021
### Fixed
- Raise Leader for Deep Cleaning task depends on Score and TaskDone
## [2.0.0] - 13/04/2021
### Added
- Resend OTP code for user-system
### Improve
- Improve UI
## [2.0.0] - 09/04/2021
### Improve
- Add permission for "Update tasker bank-account"
- Fixing default range date when get tasks
## [2.0.0] - 09/04/2021
### Improve
- Optimize query, using indexes for faster query
- Replace TABLE for better UI
## [2.0.0] - 06/04/2021
### Improve
- More testing
- More localize
## [2.0.0] - 01/04/2021
### Added
- Re-rating a task
## [2.0.0] - 02/04/2021
### Improve
- Localize
## [2.0.0] - 01/04/2021
### Added
- Sub/schedule report: 
  1.  Report Schedule by city/status
  2.  Report Subscription by city/status
- Tasker report:
  1.  Suspect tasker reward
- Cancel task 
### Improve
- Show detail of special task
- Using golang for update deepcleaning and laundry service  
- Adjust permission for components
- Localize
## [2.0.0] - 30/03/2021
### Added
- Asker report: 
  1.  Report support money asker/tasker
  2.  Report askers blacklist
  3.  Report asker done the first task
  4.  Report asker inactive
  5.  Report Asker rating
## [2.0.0] - 28/03/2021
### Added
- Task report: 
  1.  Statistic tasks by city/district/service/status
  2.  Analysis task canceled, analysis task canceled cause no tasker take the task in 15 minutes.
  3.  Report task has changed price
  4.  Report usage/cost promotion
## [2.0.0] - 26/03/2021
### Added
- Create schedule/subscription
- Feature Update schedule working time, repeat days, tasker
- Feature Update subscription duration, working time, tasker, taskNote, addressNote, range date
- Feature Renew/Cancel Subscription
- Feature Pause/Resume Schedule
- Feature Notify/Send email asker about Sub payment/renewal/order
- View, Update CS Notes
- View sub/schedule by Status (Filter is good enough)
## [2.0.0] - 23/03/2021
### Added
- Search Schedule/Subscription by Asker/Tasker phone/name
- View Detail Schedule/Subscription

## [2.0.0] - 20/03/2021
### Addedd
- View Tasker Task history, schedule/sub
- View Tasker current Confirmed Task and Calendar
- Add CS notes
- View CS notes, system notes, history (lock/unlock..)
- View balance, transaction history on both main and promo account tasker
- Deposit/withdraw money tasker
- List all Tasker by criteria
  1. By status : UNVERIFIED, INACTIVE, BLOCKED, BAN
  2. Low balance : < 100k VND or 150 baht
  3. Has not done any Task for 1, 2, 3+ weeks.
- More test

## [2.0.0] - 16/03/2021
### Added
- Feature Edit Tasker
- Feature Active/Ban/Lock... Tasker
- More test

## [2.0.0] - 15/03/2021
### Added
- This `CHANGELOG.md` file.
- This `README.md` file.
- Method `task.changeTasker`.
- Method `task.hideTasker`.
- Add tasker-detail page

### Changed
- Split method "task.addNewAcceptTasker" and "task.removeTasker" to sub-function for re-using