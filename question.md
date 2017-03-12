## 问题记录

1. @NgModule declarations 需要引用router中引用的模块
     
```javascript
 Component ForgetPwdComponent is not part of any NgModule or the module has not been imported into your module. ; Zone: <root> ; Task: Promise.then ; Value
```

2. DI ，service注入问题

3.mock-data 文件无法获取

```javascript
// angular-cli.json assets
{
  "assets": [
          "assets",
          "favicon.ico",
          "mock-data"
  ]  
}
```
[ angular-cli assets](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/asset-configuration.md)

4. inline template  Cannot read property 'push' of undefined

指令命名重复问题导致的
