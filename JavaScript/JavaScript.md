# Javascript

[8 kyu](#8kyu) | [7 kyu](#7kyu) | [6 kyu](#6kyu) | [5 kyu](#5kyu) | [4 kyu](#4kyu) | [3 kyu](#3kyu)

### <a name="3kyu">3 kyu</a>
* [CodeWars](https://www.codewars.com/kata/hard-time-bomb/train/javascript) - [Hard Time Bomb](3kyu/HardTimeBomb.js) - задачка головоломка
* [CodeWars](https://www.codewars.com/kata/multiplying-numbers-as-strings/train/javascript) - [Multiplying numbers as strings](3kyu/MultiplyingNumbersAsStrings.js) 
* [CodeWars]() - [Template](3kyu/.Template.js)

### <a name="4kyu">4 kyu</a>
* [CodeWars](https://www.codewars.com/kata/valid-braces/train/javascript) - [Valid Braces](4kyu/ValidBraces.js) - задача про скобки () {} [], практически аналогичная с задачей 5 сложности, но тут более интересные cleave solution ([CodeWars](https://www.codewars.com/kata/valid-parentheses/train/javascript) - [Valid Parentheses 5kyu](5kyu/ValidParentheses.js))
* [CodeWars](https://www.codewars.com/kata/ip-validation/train/javascript) - [IP Validation](4kyu/IPValidation.js) - RegExp; валидация IP - тесты не очень написаны мое решения проходит с ... (тремя точками) update: изменил в решении с \d{0,2} на \d{1,2} валидация с точками больше не проходит, регулярка работает как должна, можно было обойти повторения 4-х раз таким методам (\.(?!$)|$)){4} как в top solution
* [CodeWars](https://www.codewars.com/kata/strip-comments/train/javascript) - [StripComments](4kyu/StripComments.js) - RegExp; с маркерами
* [CodeWars](https://www.codewars.com/kata/regular-expression-for-binary-numbers-divisible-by-5/train/javascript) - [Regular expression for binary numbers divisible by 5](4kyu/RegularExpressionForBinaryNumbersDivisibleBy5.js) - RegExp 
* [CodeWars](https://www.codewars.com/kata/54de279df565808f8b00126a) - [Binary multiple of 3](4kyu/BinaryMultipleOf3.js) - RegExp
* [CodeWars](https://www.codewars.com/kata/strip-url-params/train/javascript) - [Strip Url Params](4kyu/StripUrlParams.js) - RegExp
* [CodeWars](https://www.codewars.com/kata/roman-numerals-encoder/train/javascript) - [Roman Numerals Encoder](4kyu/RomanNumeralsEncoder.js)
* [CodeWars](https://www.codewars.com/kata/roman-numerals-decoder/train/javascript) - [Roman Numerals Decoder](4kyu/RomanNumeralsDecoder.js) - решаю
* [CodeWars](http://www.codewars.com/kata/pick-peaks/train/javascript) - [Pick peaks](4kyu/PickPeaks.js)
* [CodeWars](http://www.codewars.com/kata/breadcrumb-generator/train/javascript) - [Breadcrumb Generator](4kyu/BreadcrumbGenerator.js) - RegExp 
* [CodeWars](https://www.codewars.com/kata/hello-w-dot-dot-dot-wait-what/train/javascript) - [Hello W... wait what?](4kyu/HelloWWaitWhat.js) - puzzle
* [CodeWars](https://www.codewars.com/kata/how-many-numbers-iii) - [How many numbers III?](4kyu/HowManyNumbersIII.js) - переделать, долгое решение
* [CodeWars]() - [Template](4kyu/.Template.js)

### <a name="5kyu">5 kyu</a>
* [CodeWars](https://www.codewars.com/kata/513fa1d75e4297ba38000003) - [flatten()](5kyu/flatten().js)
* [CodeWars](https://www.codewars.com/kata/primes-in-numbers/train/javascript) - [Primes in numbers](5kyu/PrimesInNumbers.js) - цикл while в топ решении 
* [CodeWars](https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript) - [Moving Zeros To The End](5kyu/MovingZerosToTheEnd.js) - while; проще через два filter() как в топ решении
* [CodeWars](https://www.codewars.com/kata/calculating-with-functions/train/javascript) - [Calculating with Functions](5kyu/CalculatingWithFunctions.js) - функциональный калькулятор, интересная ката
* [CodeWars](https://www.codewars.com/kata/break-camelcase/train/javascript) - [Break camelCase](5kyu/BreakCamelCase.js) - RegExp; $ - спец символ в специальном шаблоне замены в .replace()
* [CodeWars](https://www.codewars.com/kata/regex-password-validation/train/javascript) - [Regex Password Validation](5kyu/RegexPasswordValidation.js) - RegExp; ^ $ начало, конец строки, вместе задают промежуток (от и до); .* - любой символ (0 или более раз);(?= ) - шаблон просмотра вперёд; {6,} - 6 и более повторений
* [CodeWars](https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript) - [Convert string to camel case](5kyu/ConvertStringToCamelCase.js) - RegExp; toUpperCase
* [CodeWars](https://www.codewars.com/kata/string-incrementer/train/javascript) - [String incrementer](5kyu/StringIncrementer.js) - RegExp; прикольная ката с ведущими нулями (009 + 001 = 010 должно выводить)  
* [CodeWars](https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/train/javascript) - [Extract the domain name from a URL](5kyu/ExtractTheDomainNameFromAURL.js) - RegExp; короткое имя сайта; вышло только через два метода
* [CodeWars](https://www.codewars.com/kata/rot13/train/javascript) - [ROT13](5kyu/ROT13.js) - шифрование строки; fromCodePoint() - возвращает строку из значений, codePointAt() - преобразуют строку в значения
* [CodeWars](https://www.codewars.com/kata/not-very-secure/train/javascript) - [Not very secure](5kyu/NotVerySecure.js) - RegExp: решил через 2 метода проблемы с пробелами возникли, решалось включениям всей строки  в промежуток ^  и $  
* [CodeWars](https://www.codewars.com/kata/word-finder/train/javascript) - [Word Finder](5kyu/WordFinder.js) - RegExp:  .concat() - возможно использовать со строками вместо + , с решением перемудрил, нужно было .filtr использовать, интересная ката, так же замыкания использовались this; в топ решении спользовался bind() -  создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение
* [CodeWars](https://www.codewars.com/kata/return-substring-instance-count-2/train/javascript) - [Return substring instance count - 2](5kyu/ReturnSubstringInstanceCount-2.js) - RegExp
* [CodeWars](https://www.codewars.com/kata/validdate-regex/train/javascript) - [validDate Regex](5kyu/validDateRegex.js) - RegExp: валидация даты, без учёта 29 фервраля
* [CodeWars](https://www.codewars.com/kata/number-hashtag/train/javascript) - [#Hashtag](5kyu/%23Hashtag.js) - RegExp: поиск слов по хаштэгу,и убираем хаштэг; (?:\B#+) - начинает отсчёт от не границы слоы за нужным нам символом в данном случае за # 
* [CodeWars](https://www.codewars.com/kata/simple-pig-latin/train/javascript) - [Simple Pig Latin](5kyu/SimplePigLatin.js) - cleave solution RegExp с шаблонами () $ интересное решения. метод slice и splice
* [CodeWars](https://www.codewars.com/kata/valid-parentheses/train/javascript) - [Valid Parentheses](5kyu/ValidParentheses.js)- интересная задачка про скобки () 
* [CodeWars](https://www.codewars.com/kata/palindrome-chain-length) - [Palindrome chain length](5kyu/PalindromeChainLength.js) - рекурсия со счётчиком, parseInt - строку в число, toString - в строку
* [CodeWars](https://www.codewars.com/kata/merged-string-checker/train/javascript) - [Merged String Checker](5kyu/MergedStringChecker.js) - не тривиальная, интересная задача, решал пару вечеров, решил через костыль, в решениях рекурсия, есть решение через RegExp к которому стремился (не вышло реализовать двойное экранирование символов) у него используется \w|\d можно просто оставить было \w - эквивалентно [A-Za-z0-9_] а \d - эквивалентно [0-9], такой способ как в RegExp позволяет найти все символы в заданном порядке.  При решение через RegExp, создаются регулярки в дополнительной функции.
* [CodeWars](https://www.codewars.com/kata/human-readable-time/train/javascript) - [Human Readable Time](5kyu/HumanReadableTime.js) - Задача про время, из секунд в формат (HH:MM:SS)
* [CodeWars](https://www.codewars.com/kata/largest-5-digit-number-in-a-series/train/javascript) - [Largest 5 digit number in a series](5kyu/Largest5DigitNumberInASeries.js) - Найти максимальное пятисимвольное число из порядка цифр, топорное решения, перебирая все значения возможные, substr() возвращает указанное количество символов из строки, начиная с указанной позиции
* [CodeWars](https://www.codewars.com/kata/multi-line-task-gcd-function/train/javascript) - [Multi Line Task: GCD Function](5kyu/MultiLineTaskGCDFunction.js) - GCD - [Наибольший общий делитель](https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B8%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%B9_%D0%BE%D0%B1%D1%89%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C), написать функцию в 3 символа в строку и 7 строк, в ответах есть решения в 2 символа на строку
* [CodeWars](http://www.codewars.com/kata/maximum-subarray-sum/train/javascript) - [Maximum subarray sum](5kyu/MaximumSubarraySum.js)
* [CodeWars](https://www.codewars.com/kata/number-of-trailing-zeros-of-n/train/javascript) - [Number of trailing zeros of N!](5kyu/NumberOfTrailingZerosOfN!.js)
* [CodeWars](https://www.codewars.com/kata/where-my-anagrams-at/train/javascript) - [Where my anagrams at?](5kyu/WhereMyAnagramsAt.js)
* [CodeWars](https://www.codewars.com/kata/greed-is-good/train/javascript) - [Greed is Good](5kyu/GreedIsGood.js) - Object, перебор объектов, одина элементы массива
* [CodeWars](https://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression/train/javascript) - [Find the missing term in an Arithmetic Progression](5kyu/FindTheMissingTermInAnArithmeticProgression.js)
* [CodeWars](https://www.codewars.com/kata/pete-the-baker/train/javascript) - [Pete, the baker](5kyu/PeteTheBaker.js) object
* [CodeWars](https://www.codewars.com/kata/part-1-evil-programming-government-restrictions/train/javascript) - [Part 1: Evil Programming Government Restrictions](5kyu/Part1EvilProgrammingGovernmentRestrictions.js) - puzzles
* [CodeWars](https://www.codewars.com/kata/simple-time-bomb/train/javascript) - [Simple Time Bomb](5kyu/SimpleTimeBomb.js) - puzzles
* [CodeWars](https://www.codewars.com/kata/now-thats-a-crib/train/javascript) - [Now that's a crib!](5kyu/NowThatsACrib.js) - нарисовать дом 
* [CodeWars](https://www.codewars.com/kata/best-travel/train/javascript) - [Best travel](5kyu/BestTravel.js) - рекурсия
* [CodeWars](https://www.codewars.com/kata/basic-denico/train/javascript) - [Basic DeNico](5kyu/BasicDeNico.js)
* [CodeWars](https://www.codewars.com/kata/airport-arrivals-slash-departures-number-1/train/javascript) - [Airport Arrivals/Departures - #1](5kyu/AirportArrivalsDepartures.js)
* [CodeWars]() - [Template](5kyu/.Template.js)


### <a name="6kyu">6 kyu</a>
* [CodeWars](https://www.codewars.com/kata/bouncing-balls/train/javascript) - [Bouncing balls](6kyu/BouncingBalls.js) : логарифмы
* [CodeWars](https://www.codewars.com/kata/build-tower/train/javascript) - [Build tower](6kyu/BuildTower.js) : RegExp, метод .repeat (для дублирования строк) плохое решения, код можно упростить.
* [CodeWars](https://www.codewars.com/kata/decode-the-morse-code/train/javascript) - [Decode the morse code](6kyu/DecodeTheMorseCode.js) 
* [CodeWars](https://www.codewars.com/kata/find-the-odd-int/train/javascript) - [Find the odd int](6kyu/FindTheOddInt.js) : используется побитовое сравнения - ^ 
* [CodeWars](https://www.codewars.com/kata/dubstep/javascript) - [Dubstep](6kyu/Dubstep.js) : RegExp 
* [CodeWars](https://www.codewars.com/kata/57ea70aa5500adfe8a000110) - [Fold an array](6kyu/FoldAnArray.js) : рекурсия 
* [CodeWars](https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript) - [Format a string of names like 'Bart, Lisa & Maggie'](6kyu/FormatAStringOfMamesLike'Bart,Lisa&Maggie'.js)
* [CodeWars](https://www.codewars.com/kata/52761ee4cffbc69732000738) - [Good vs Evil](6kyu/GoodVsEvil.js) : топ решения интересное
* [CodeWars](https://www.codewars.com/kata/is-a-number-prime/train/javascript) - [Is a number prime](6kyu/IsANumberPrime.js) : нахождения простого числа, мое решения находит все простые числа до n, забавное решения в ответах было :))
* [CodeWars](https://www.codewars.com/kata/longest-palindrome/javascript) - [longest palindrome](6kyu/longestPalindrome.js) : Палиндром, топ решения намного лучше, там сокращается массив
* [CodeWars](https://www.codewars.com/kata/multiples-of-3-and-5/train/javascript) - [Multiples of 3 and 5](6kyu/MultiplesOf3And5.js)
* [CodeWars](https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/train/javascript) - [Simple encryption #1 - alternating split](6kyu/SimpleEncryption%231-AlternatingSplit.js) : рекурсия, две задачки в одной, ~~ побитовое приведения к меньшему числу = Math.floor(), интересные решения 
* [CodeWars](https://www.codewars.com/kata/split-strings/train/javascript) - [Split strings](6kyu/SplitStrings.js) : плохое решения, надо было через RegExp .match/../ - два любых значения, если не будет второго значения не чего не вернёт.
* [CodeWars](https://www.codewars.com/kata/sum-consecutives/train/javascript) - [Sum consecutives](6kyu/SumConsecutives.js)
* [CodeWars](https://www.codewars.com/kata/title-case/javascript) - [Title case](6kyu/TitleCase.js) : RegExp, интересная задачка перевод первой буквы у слов в заглавную кроме исключений, в первом решениее немного обманул систему не мог пройти 1 тест через регулярное выражения и вообще там не понятно что твориться много лишнего :), второе решения спустя пару недели скорее всего тоже можно немного упростить (пробовал добавить в регулярку [^\b.] все ровно последний тест не проходила, так что лишний replace пришлось использовать), интересные решения есть через eval (который не используется). 
* [CodeWars](https://www.codewars.com/kata/tortoise-racing/javascript) - [Tortoise racing](6kyu/TortoiseRacing.js) : задачка со временем. *60 переводм в минуты, % - деления что бы отбросить остаток, иначе задача не решается, мешают побитовые вычисления 
* [CodeWars](https://www.codewars.com/kata/vasya-clerk/train/javascript) - [Vasya - clerk](6kyu/Vasya-Clerk.js) : switch - case = if - else
* [CodeWars](https://www.codewars.com/kata/weird-string-case/train/javascript) - [WeIrD StRiNg CaSe](6kyu/WeIrDStRiNgCaSe.js) : в решениях присутсвует RegExp
* [CodeWars](https://www.codewars.com/kata/550554fd08b86f84fe000a58) - [Which are in](6kyu/WhichAreIn.js) : RegExp в цикле
* [CodeWars](https://www.codewars.com/kata/weird-string-case/train/javascript) - [Who likes it](6kyu/WhoLikesIt.js) : switch - case
* [CodeWars](https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript) - [Stop gninnipS My sdroW!](6kyu/StopGninnipSMySdroW!.js)
* [CodeWars](https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript) - [Sum of Digits / Digital Root](6kyu/SumOfDigitsDigitalRoot.js) : рекурсия
* [CodeWars](https://www.codewars.com/kata/bit-counting/train/javascript) - [Bit Counting](6kyu/BitCounting.js)
* [CodeWars](https://www.codewars.com/kata/format-words-into-a-sentence/train/javascript) - [Format words into a sentence](6kyu/FormatWordsIntoASentence.js) - RegExp - (?=[^,]*$) - поиск запятой с конца, если заменить запятую, то будет поиск другого символа
* [CodeWars](https://www.codewars.com/kata/find-the-parity-outlier/train/javascript) - [Find The Parity Outlier](6kyu/FindTheParityOutlier.js)
* [CodeWars](https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript) - [Take a Ten Minute Walk](6kyu/TakeaTenMinuteWalk.js) - забавная задачка, внимательнее условия надо читать, решения оригинальные.
* [CodeWars](https://www.codewars.com/kata/detect-pangram/train/javascript) - [Detect Pangram](6kyu/DetectPangram.js) - RegExp; проверка является ли предложения [панграммом](https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BD%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0) - короткий текст, использующий все  буквы алфавита, по возможности не повторяя их.
* [CodeWars](https://www.codewars.com/kata/highest-scoring-word/train/javascript) - [Highest Scoring Word](6kyu/HighestScoringWord.js) - интересная задачка, добавил алфавит [a-z] в объект, можно было через charCodeAt минус 96 решить
* [CodeWars](https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript) - [Replace With Alphabet Position](6kyu/ReplaceWithAlphabetPosition.js) - charCodeAt
* [CodeWars](https://www.codewars.com/kata/are-they-the-same/train/javascript) - [Are they the "same"?](6kyu/AreTheyThesame.js) - сравнение двух массивов, every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции
* [CodeWars](https://www.codewars.com/kata/duplicate-encoder/train/javascript) - [Duplicate Encoder](6kyu/DuplicateEncoder.js) - интересная задачка, проверяем если в нашей строке повторяющиеся символы, w.indexOf(a) == w.lastIndexOf(a)- проверка по индексу
* [CodeWars](https://www.codewars.com/kata/valid-phone-number/train/javascript) - [Valid Phone Number](6kyu/ValidPhoneNumber.js) - RegExp 
* [CodeWars](https://www.codewars.com/kata/count-the-smiley-faces/train/javascript) - [Count the smiley faces!](6kyu/CountTheSmileyFaces!.js) - RegExp; оригинальная задачка (условия) :)
* [CodeWars](https://www.codewars.com/kata/find-the-divisors/train/javascript) - [Find the divisors!](6kyu/FindTheDivisors!.js) 
* [CodeWars](https://www.codewars.com/kata/your-order-please/train/javascript) - [Your order, please](6kyu/YourOrderPlease.js) - решения топовое намного проще
* [CodeWars](https://www.codewars.com/kata/counting-duplicates/train/javascript) - [Counting Duplicates](6kyu/CountingDuplicates.js) RegExp ([^])\1+ - интересное решениях регулярках, находит все вхождение где больше 2 одинаковых символов
* [CodeWars](https://www.codewars.com/kata/build-a-pile-of-cubes/train/javascript) - [Build a pile of Cubes](6kyu/BuildAPileOfCubes.js) - в решениях есть формула сумма кубов чисел n^3 + (n-1)^3 + ... 1^3
* [CodeWars](https://www.codewars.com/kata/does-my-number-look-big-in-this/train/javascript) - [Does my number look big in this?](6kyu/DoesMyNumberLookBigInThis.js)
* [CodeWars](https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript) - [Equal Sides Of An Array](6kyu/EqualSidesOfAnArray.js)
* [CodeWars](https://www.codewars.com/kata/tribonacci-sequence/train/javascript) - [Tribonacci Sequence](6kyu/TribonacciSequence.js)
* [CodeWars](https://www.codewars.com/kata/array-helpers/train/javascript) - [Array Helpers](6kyu/ArrayHelpers.js) - Свойство Array.prototype представляет прототип для конструктора Array
* [CodeWars](https://www.codewars.com/kata/give-me-a-diamond/train/javascript) - [Give me a Diamond](6kyu/GiveMeADiamond.js) - интересная задачка, похожа на построить башню из *, только сложнее
* [CodeWars](https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka/train/javascript) - [Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!](6kyu/TakeANumberAndSumItsDigitsRaisedToTheConsecutivePowersAnd¡Eureka.js) - 
* [CodeWars](https://www.codewars.com/kata/find-the-missing-letter/train/javascript) - [ind the missing letter](6kyu/IndTheMissingLetter.js) - RegExp
* [CodeWars](https://www.codewars.com/kata/count-characters-in-your-string/train/javascript) - [Count characters in your string](6kyu/CountCharactersInYourString.js) - object
* [CodeWars](https://www.codewars.com/kata/throwing-darts/train/javascript) - [Throwing Darts](6kyu/ThrowingDarts.js)
* [CodeWars](https://www.codewars.com/kata/sort-arrays-ignoring-case/train/javascript) - [Sort Arrays (Ignoring Case)](6kyu/SortArrays(IgnoringCase).js) - localeCompare() сортировка массива с заглавной буквой
* [CodeWars](https://www.codewars.com/kata/sort-the-odd/train/javascript) - [Sort the odd](6kyu/SortTheOdd.js)
* [CodeWars](https://www.codewars.com/kata/rectangle-into-squares/train/javascript) - [Rectangle into Squares](6kyu/RectangleIntoSquares.js)
* [CodeWars](https://www.codewars.com/kata/alphabet-wars-reinforces-massacre/train/javascript) - [Alphabet wars - reinforces massacre](6kyu/AlphabetWarsReinforcesMassacre.js)
* [CodeWars](https://www.codewars.com/kata/triple-trouble-1/train/javascript) - [Triple trouble](6kyu/TripleTrouble.js) - RegExp c числами, решил через сравнение массивов 
* [CodeWars](https://www.codewars.com/kata/validate-credit-card-number/train/javascript) - [Validate Credit Card Number](6kyu/ValidateCreditCardNumber.js)
* [CodeWars](https://www.codewars.com/kata/function-composition/train/javascript) - [Function Composition](6kyu/FunctionComposition.js) - лямда функция, call, apply
* [CodeWars](https://www.codewars.com/kata/sequences-and-series/train/javascript) - [Sequences and Series](6kyu/SequencesAndSeries.js) - puzzles
* [CodeWars](https://www.codewars.com/kata/fibonacci-tribonacci-and-friends/train/javascript) - [Fibonacci, Tribonacci and friends](6kyu/FibonacciTribonacciAndFriends.js)
* [CodeWars](https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript) - [Write Number in Expanded Form](6kyu/WriteNumberInExpandedForm.js)
* [CodeWars](https://www.codewars.com/kata/react-with-jsx/train/javascript) - [React with JSX](6kyu/ReactWithJSX.js) - React
* [CodeWars](https://www.codewars.com/kata/react-fun-number-1-component-types-and-nesting/train/javascript) - [React Fun #1: Component types and nesting](6kyu/ReactFun1ComponentTypesAndNesting.js) - React
* [CodeWars]() - [Template](6kyu/.Template.js)

### <a name="7kyu">7 kyu</a>
* [CodeWars](https://www.codewars.com/kata/categorize-new-member/train/javascript) - [Categorize new member](7kyu/CategorizeNewMember.js)
* [CodeWars](https://www.codewars.com/kata/5412509bd436bd33920011bc) - [Credit card mask](7kyu/CreditCardMask.js) : RegExp
* [CodeWars](https://www.codewars.com/kata/5813d19765d81c592200001a) - [Dont give me number](7kyu/DontGiveMeNumber.js)
* [CodeWars](https://www.codewars.com/kata/get-the-middle-character/train/javascript) - [Get the middle character](7kyu/GetTheMiddleCharacter.js)
* [CodeWars](https://www.codewars.com/kata/growth-of-a-population/train/javascript) - [Growth of a Population](7kyu/GrowthOfAPopulation.js)
* [CodeWars](https://www.codewars.com/kata/most-digits/train/javascript) - [Most digits](7kyu/MostDigits.js)
* [CodeWars](https://www.codewars.com/kata/56541980fa08ab47a0000040) - [Printer errors](7kyu/PrinterErrors.js) : RegExp, в ответах используют шаблонные строки
* [CodeWars](https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/train/javascript) - [Sum of the first nth term of series](7kyu/SumOfTheFirstNthTermOfSeries.js)
* [CodeWars](https://www.codewars.com/kata/two-to-one/train/javascript) - [Two to One](7kyu/TwoToOne.js) : в решениях испольузют деструктуризацию массива и new Set (позволяет сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов)
* [CodeWars](https://www.codewars.com/kata/javascript-class-like-objects/train/javascript) - [JavaScript class-like objects](7kyu/JavaScriptClass-likeObjects.js) - class; object
* [CodeWars](https://www.codewars.com/kata/youre-a-square/train/javascript) - [You're a square!](7kyu/YoureASquare.js)
* [CodeWars](https://www.codewars.com/kata/square-every-digit/train/javascript) - [Square Every Digit](7kyu/SquareEveryDigit.js)
* [CodeWars](https://www.codewars.com/kata/madhav-array/train/javascript) - [Madhav array](7kyu/MadhavArray.js) - интересная задачка, явно не для 7 ранга 
* [CodeWars](http://www.codewars.com/kata/letterbox-paint-squad/train/javascript) - [Letterbox Paint-Squad](7kyu/LetterboxPaint-Squad.js) - интересная задачка
* [CodeWars](http://www.codewars.com/kata/zero-balanced-array/train/javascript) - [zero-balanced Array](7kyu/ZeroBalancedArray.js) - сравнения двух массивов 
* [CodeWars](https://www.codewars.com/kata/manipulate-url-parameters/train/javascript) - [Manipulate URL Parameters](7kyu/ManipulateURLParameters.js) - include определяет, находится ли одна строка внутри другой
* [CodeWars](https://www.codewars.com/kata/creating-elements-with-react/train/javascript) - [Creating Elements with React](7kyu/CreatingElementsWithReact.js)  - React
* [CodeWars]() - [Template](7kyu/.Template.js) 

### <a name="8kyu">8 kyu</a>
* [CodeWars](https://www.codewars.com/kata/regular-ball-super-ball/javascript) - [Regular Ball Super Ball](8kyu/RegularBallSuperBall.js)
* [CodeWars](https://www.codewars.com/kata/color-ghost/train/javascript) - [ColorGhost](8kyu/ColorGhost.js) - object, class { constructor } 
* [CodeWars](https://www.codewars.com/kata/grasshopper-terminal-game-number-1/train/javascript) - [Grasshopper - Terminal Game #1](8kyu/Grasshopper-TerminalGame1.js) - object, create class 
* [CodeWars](https://www.codewars.com/kata/area-of-a-square-easy/train/javascript) - [Area of a Square (Easy)](8kyu/AreaOfASquare(Easy).js) - забавная задачка, на радиус
* [CodeWars](https://www.codewars.com/kata/welcome/train/javascript) - [Welcome!](8kyu/Welcome!.js) - object
* [CodeWars](https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/train/javascript) - [altERnaTIng cAsE <=> ALTerNAtiNG CaSe](8kyu/altERnaTIngcAsEALTerNAtiNGCaSe.js) - this, область видимости, задача явно не 8 ранга
