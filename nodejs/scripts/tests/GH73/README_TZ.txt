The timezoneOffset tests are running under linux without modifications
To get the green bar under windows, set the system timezone to UTC.
When you pass serveral datas at Calendar.xmlCalendarToDate() and CET timezone, you will see, that all timezoneOffsets
are -60 except you pass a single day. In this case you will recieve -120 as the TZ offset. 
Strange behavior, can't explain why. 
