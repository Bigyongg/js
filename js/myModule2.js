
(function () {
    /*/
使用函数
 */
            //1私有数据
            var data = 'pink'

            //2.私有操作数据的行为
            function foo() {
                console.log('foo()',data)
            }
            function bar() {
                console.log('bar()',data)
            }

        //3.向外暴露行为
            function fn() {
                console.log('fn()',data)
            }
        window.myModule2 = {
                foo:foo,
                bar:bar
        }
})()
