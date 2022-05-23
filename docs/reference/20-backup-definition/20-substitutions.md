# Substitutions

Substitutions are placeholders which can be used in the [backup definition](overview) configuration.

Substitute | Captures | Eqivalent RegEx
 --: | --- | ---
`%Y` | 4-digit Year | `[0-9]{4}`
`%y` | 2-digit Year | `[0-9]{2}`
`%M` | 2-digit Month | `0[1-9]|1[0-2]`
`%D` | 2-digit Day | `0[1-9]|[1,2][0-9]|3[0,1]`
`%h` | 2-digit Hour | `[0,1][0-9]|2[0-3]`
`%m` | 2-digit Minute | `[0-5][0-9]`
`%s` | 2-digit Second | `[0-5][0-9]`
`%i` | Decimal number without leading zeros | `0|[1-9][0-9]*`
`%I` | Sequence of decimal digits | `[0-9]+`
`%x` | Hexadecimal number without leading zeros | `0|[1-9A-Fa-f][0-9A-Fa-f]*`
`%X` | Sequence of hexadecimal digits | `[0-9A-F]+`
`%w` | Alphanumeric characters and underscore | `[_0-9A-Za-z]+`
`%v` | Anything a pattern variable would capture | `[^\\./]+`
`%?` | Any sequence of characters | `.+`
`%%` | Percent symbol | `%`
`%#` | Hash/Pound symbol | `#`
