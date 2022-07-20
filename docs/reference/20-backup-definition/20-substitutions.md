# Substitutions

Substitutions are placeholders which can be used in the [backup definition](overview) configuration.

Substitute | Captures | Populated variable | Part of `interpolated_timestamp` | Equivalent RegEx
 --: | --- | --- | ---
`%Y` | 4-digit Year | `$year` | Year | `[0-9]{4}`
`%y` | 2-digit Year | `$year_short` | Year | `[0-9]{2}`
`%M` | 2-digit Month | `$month` | Month | <code>0[1-9]&#124;1[0-2]</code>
`%D` | 2-digit Day | `$day` | Day | <code>0[1-9]&#124;[1,2][0-9]&#124;3[0,1]</code>
`%h` | 2-digit Hour | `$hour` | Hour | <code>[0,1][0-9]&#124;2[0-3]</code>
`%m` | 2-digit Minute | `$minute` | Minute | `[0-5][0-9]`
`%s` | 2-digit Second | `$second` | Second | `[0-5][0-9]`
`%i` | Decimal number without leading zeros | *none* | *none* | <code>0&#124;[1-9][0-9]*</code>
`%I` | Sequence of decimal digits | *none* | *none* | `[0-9]+`
`%x` | Hexadecimal number without leading zeros | *none* | *none* | <code>0&#124;[1-9A-Fa-f][0-9A-Fa-f]*</code>
`%w` | Alphanumeric characters and underscore | *none* | *none* | `[_0-9A-Za-z]+`
`%X` | Sequence of hexadecimal digits | *none* | *none* | `[0-9A-F]+`
`%v` | Anything a pattern variable would capture | *none* | *none* | `[^\\./]+`
`%?` | Any sequence of characters | *none* | *none* | `.+`
`%%` | Percent symbol | *none* | *none* | `%`
`%#` | Hash/Pound symbol | *none* | *none* | `#`
