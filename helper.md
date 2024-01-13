# 开发注意事项

## 导航路由

使用 `createNativeStackNavigator` 代替 `createStackNavigator`

主要区别：
1. 性能和体验：由于 Native Stack Navigator 使用原生导航堆栈，它可能会提供更流畅、更接近原生的导航体验，特别是在复杂的 UI 和动画场景下。

2. 功能和 API：实现动画更方便，更新也较快

3. 统一配置：混用的话开发和维护成本较大

