# <span class="jumptarget"> Data Types </span>

#### <span class="jumptarget"> int</span>

An integer number with a maximum value of 2147483647. Negatives are disallowed unless otherwise specified.

#### <span class="jumptarget"> decimal(M, D)</span>

A decimal number of up to M digits in total including* D* digits after the decimal point. Negatives are disallowed unless otherwise specified.

#### <span class="jumptarget"> string(M)</span>

A string of text up to M characters in length.

#### <span class="jumptarget"> text</span>

A string of text up to ~16,777,216 bytes in length.

#### <span class="jumptarget"> boolean</span>

A boolean value: true or false. In JSON it will be represented using the native boolean type. In XML, it will be the literal strings true or false.

#### <span class="jumptarget"> date</span>

An RFC 2822 date. All dates output by BigCommerce API responses are in GMT (+0000) time. However, any time zone may be used on inputs as the offset information will be converted accordingly.

#### <span class="jumptarget"> datetime</span>

An ISO 8601 datetime value. This is currently only supported as an input parameter on filters. Date values in responses remain in the RFC 2822 format.

#### <span class="jumptarget"> enum</span>

An enumeration of string values. Only the values specified in the fields description are allowed.

#### <span class="jumptarget"> object</span>

An object with its own set of fields.

#### <span class="jumptarget"> country code</span>

A 2 character ISO 3166-1 alpha-2 country code.

#### <span class="jumptarget"> email address</span>

A valid email address. 250 characters maximum.

#### <span class="jumptarget"> variable</span>

Variable data depending on context. See the field definition for specifics.

#### <span class="jumptarget"> array</span>

A simple list of values. In JSON this will be an array. In XML the field will contain a set of `<value>` elements.

#### <span class="jumptarget"> resource</span>

A string representing a URI reference to another resource within the current version of the API.

#### <span class="jumptarget"> null</span>

A null value. In JSON this is represented as the native null type. In XML, it is represented as the literal string NULL.
