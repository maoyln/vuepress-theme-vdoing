(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{586:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"乘胜追击-文件与窗口基础操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乘胜追击-文件与窗口基础操作"}},[s._v("#")]),s._v(" 乘胜追击：文件与窗口基础操作")]),s._v(" "),t("p",[s._v("vim 的部分已经结束，相信坚持到这里的朋友基本已经对 vim 有了基本（或更多）的了解，也已经可以在日常的开发中巴适地使用 vim 的操作命令来完成大部分的 coding 工作（如果你也是如我一般认真坚持了 18 天的话；我在到今天为止，在日常的 coding 中百分之 90 的时间双手是在键盘上的，而且随着对键位及快捷键的熟悉，coding 过程中的思维也愈加地集中，不容易被打断）。但是对于 vscode 来说，vim 是服务于或优势于编辑，而更多地对于 vscode 的使用操作，我们当然也是应该去学习、掌握，这样才可以让 vscode 之中 vim 之外的部分使用得更加丝滑。")]),s._v(" "),t("p",[s._v("既然如此，我们就乘胜追击，了解更多关于 vscode 本身的操作命令、快捷键。")]),s._v(" "),t("h2",{attrs:{id:"窗口焦点切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#窗口焦点切换"}},[s._v("#")]),s._v(" 窗口焦点切换")]),s._v(" "),t("p",[s._v("在"),t("RouterLink",{attrs:{to:"/《Vim》学习笔记/20.vim/15.窗口管理大法.html"}},[s._v("之前的课程-15.窗口管理")]),s._v("中，我们学习了 vim 的窗口管理的一些命令，当光标在编辑窗口时，我们通过 "),t("code",[s._v("shift")]),s._v(" + "),t("code",[s._v("ctrl")]),s._v(" + "),t("code",[s._v("h")]),s._v(" / "),t("code",[s._v("l")]),s._v(" 来使光标在左右窗口移动焦点，不过在使用的过程中这个快捷键还是比较不顺手，毕竟要按三个键，而且 vim 的命令只能在编辑窗使用，如果我们当前焦点在终端这类的时候，就无法使用 vim 的命令切换焦点了；而对于我们日常来说，需要聚焦到侧边的资源管理器的情况是很常有的，我们急需一个更方便好用的组合键达到这个目的；而 vscode 中，其实是有这个快捷键的，就是 "),t("code",[s._v("shift")]),s._v(" + "),t("code",[s._v("command")]),s._v(" + "),t("code",[s._v("e")]),s._v("，既然如此，在结合我们"),t("RouterLink",{attrs:{to:"/《Vim》学习笔记/20.vim/18.调用vscode命令.html"}},[s._v("前面-18.调用vscode命令")]),s._v("提到的方式，如此这般，就可以在 "),t("code",[s._v("keybindings.json")]),s._v(" 中映射：")],1),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("...\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"key"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ctrl+;"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"workbench.view.explorer"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `shift` + `command` + `e` 组合键对应的 命令ID（Command ID）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n...\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这样，我们就可以在任何时候都可以快速地聚焦到资源管理器了。与之相同的，聚焦编辑窗也是与聚焦资源管理器一样甚至更大的需求，同样 vscode 原本也有这个功能的组合键，就是 "),t("code",[s._v("command")]),s._v(" + "),t("code",[s._v("1")]),s._v(" (workbench.action.focusFirstEditorGroup)，我们也可以把它重新映射一下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"key"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ctrl+\'"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"workbench.action.focusFirstEditorGroup"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("这样，我们就可以在任何时候快速聚焦到编辑窗中了。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("我的做法")]),s._v(" "),t("p",[s._v("其实配置完 "),t("code",[s._v("ctrl")]),s._v(" + "),t("code",[s._v(";")]),s._v(" 后你会发现，当焦点在资源管理器时，如果使用这个快捷键，焦点会跳到编辑窗，这就意味着我们可以使用这个快捷键在这两个区域切换焦点；这时你可能会问，那终端与其他部分的焦点切换呢？我的做法是不用 vscode 的终端，直接打开自带的命令行工具或自己的其他命令行工具（比如我用 warp），一劳永逸，所有在跑的项目都在同一个地方查看，更方便管理。")]),s._v(" "),t("p",[s._v("去 TM 的终端！")])]),s._v(" "),t("h2",{attrs:{id:"移动光标与查看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动光标与查看"}},[s._v("#")]),s._v(" 移动光标与查看")]),s._v(" "),t("p",[s._v("在我们习惯了 vim 的 "),t("code",[s._v("hjkl")]),s._v(" 后，在资源管理器中上下切换文件焦点是很简单并且自然而然的事情。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("jk")]),s._v("：上下切换文件焦点")]),s._v(" "),t("li",[t("code",[s._v("h")]),s._v("：聚焦当前文件所在的文件夹并且折叠收起该文件夹")]),s._v(" "),t("li",[t("code",[s._v("l")]),s._v("：在编辑窗打开该文件")])]),s._v(" "),t("h2",{attrs:{id:"文件操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[s._v("#")]),s._v(" 文件操作")]),s._v(" "),t("p",[s._v("在日常使用中，我们常常需要新建文件或者文件夹；而对于我们使用了 vim 的 vscode，又可以分成三个不同的情况：")]),s._v(" "),t("ul",[t("li",[s._v("聚焦在资源管理器时：此时，我们可以配置个快捷键来新建文件或文件夹，在 "),t("code",[s._v("keybindings.json")]),s._v(" 添加：")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("...\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"key"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新建文件")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"explorer.newFile"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"when"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filesExplorerFocus && !inputFocus"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"key"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shift+a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新建文件夹")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"explorer.newFolder"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"when"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filesExplorerFocus && !inputFocus"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n...\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("这里的 "),t("code",[s._v("when")]),s._v(" 条件其实是指：当前的 vscode 焦点要在侧边栏的资源管理器中，且不是在输入框聚焦的情况下；后者是为了限制在编辑文件或文件夹名称时这两快捷键不可触发。")]),s._v(" "),t("ul",[t("li",[s._v("聚焦在编辑窗时：此时我们可以在 "),t("code",[s._v("setting.json")]),s._v(" 配置如下组合键来达到同样效果：")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vim.normalModeKeyBindingsNonRecursive"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  ...\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"before"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<Leader>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"commands"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"explorer.newFolder"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"before"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<Leader>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"f"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"commands"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"explorer.newFile"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  ...\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[s._v("除了以上两种情况时：而除了使用前面两种方式，vscode 也提供一个全局新建文件的命令 "),t("code",[s._v("command")]),s._v(" + "),t("code",[s._v("n")]),s._v("，这时会新建一个没有扩展名的空白文件，而且只能在保存时才能把文件保存到想要的路径下。")])]),s._v(" "),t("p",[s._v("除了新建，删除和重命名也有对应的快捷键（聚焦资源管理器并选中）：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("command")]),s._v(" + "),t("code",[s._v("delete")]),s._v("：删除文件")]),s._v(" "),t("li",[t("code",[s._v("enter")]),s._v("：重命名文件")])]),s._v(" "),t("p",[s._v("删除文件改建：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除文件改建")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"key"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deleteFile"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"when"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("删除文件按键比较远，顾改建为"),t("code",[s._v("r")]),s._v("； 重命名"),t("code",[s._v("enter")]),s._v("用起来很方便，而且已经习惯了，所以就不做修改了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);