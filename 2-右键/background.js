chrome.contextMenus.create({ 
    type: "normal",                         // 菜单类型  "checkbox" 多选框, "radio" 单选框， "separator" 分隔线
    title: "这是一个normal type的标题",
    contexts: ["selection", "link"],         // 类似右键作用域
    onclick: function(info) {
        console.log(info)
    }
}, function(){

})

chrome.contextMenus.create({ 
    type: "normal",                         // 菜单类型  "checkbox" 多选框, "radio" 单选框， "separator" 分隔线
    title: "父级",
    id: "hello"
}, function(){

})

var a1 = { 
    id: "c1",
    type: "checkbox",                         // 菜单类型  "checkbox" 多选框, "radio" 单选框， "separator" 分隔线
    title: "这是一个 checkbox type的标题",
    onclick: function(info) {
        chrome.contextMenus.update("hello", {
            title: "changed"
        })
    },
    parentId: "hello"
};

chrome.contextMenus.create(a1, function(){

})

chrome.contextMenus.create({ 
    id: "c2",
    type: "checkbox",                         // 菜单类型  "checkbox" 多选框, "radio" 单选框， "separator" 分隔线
    title: "这是一个 checkbox type的标题22",
    onclick: function(info) {
        console.log(info)
    },
    parentId: "hello"
}, function(){

})

chrome.contextMenus.create({ 
    type: "radio",                         // 菜单类型  "checkbox" 多选框, "radio" 单选框， "separator" 分隔线
    title: "这是一个 radio type的标题",
    onclick: function(info) {
        console.log(info)
    }
}, function(){

})