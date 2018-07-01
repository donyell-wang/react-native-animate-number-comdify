This package is based on [react-native-animate-number](https://github.com/wkh237/react-native-animate-number), while added with a comdify effect. Which looks like below:


![](./demo.gif)

## usage

```javascript
<ComdifyNumber
  value={123}
/>
```

You can pass any prop [react-native-animate-number](https://github.com/wkh237/react-native-animate-number) supports, like `value`.

Some more props are adds:

| name          | type   | default | description                                                                          |
|:--------------|:-------|:--------|:-------------------------------------------------------------------------------------|
| animated      | bool   | true    | switch animating effect                                                              |
| comdified     | bool   | true    | if you need comdify formatting                                                       |
| decimalDigits | number | 0       | this defines how to display decimal, default to 0, which means displaying an integar |
