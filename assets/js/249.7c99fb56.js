(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{578:function(v,_,t){"use strict";t.r(_);var c=t(4),e=Object(c.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"开发必备-多文件跳转"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发必备-多文件跳转"}},[v._v("#")]),v._v(" 开发必备：多文件跳转")]),v._v(" "),_("p",[v._v("在开发中，我们常常需要在多行代码、多个文件中来回穿梭，在方法与调用出翻来覆去；而 vim 对于这类情况，有它独特的理解和解决解决方案 —— 跳转。")]),v._v(" "),_("h2",{attrs:{id:"何为跳转-jump"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#何为跳转-jump"}},[v._v("#")]),v._v(" 何为跳转（jump）")]),v._v(" "),_("p",[v._v("vim 会记录我们最近通过命令访问的位置（包括文件名、行号、列号），记录在一个叫 jump list 的列表中，而且每个窗口都会有一个单独的 jump list。顾名思义，jump list 中的每条记录都是一个跳转（jump），而会被记录在 jump list 的位置需要是一下的指令产生的：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("'")]),v._v(" ：跳转到标记的⾏，标记的具体解释在下一段")]),v._v(" "),_("li",[_("code",[v._v("`")]),v._v(" ：跳转到标记的位置(⾏和列)，标记的具体解释在下一段")]),v._v(" "),_("li",[_("code",[v._v("gg")]),v._v(" ： 跳转到头部")]),v._v(" "),_("li",[_("code",[v._v("gd")]),v._v(" ： 跳转到定义；这个在日常使用特别多，谨记；")]),v._v(" "),_("li",[_("code",[v._v("/")]),v._v(" ：向后搜索")]),v._v(" "),_("li",[_("code",[v._v("?")]),v._v(" ：向前搜索")]),v._v(" "),_("li",[_("code",[v._v("n")]),v._v(" ：重复上⼀次搜索，相同⽅向")]),v._v(" "),_("li",[_("code",[v._v("N")]),v._v(" ：重复上⼀次搜索，相反⽅向")]),v._v(" "),_("li",[_("code",[v._v("{")]),v._v(" ：跳转上⼀个段落")]),v._v(" "),_("li",[_("code",[v._v("}")]),v._v(" ：跳转下⼀个段落")])]),v._v(" "),_("p",[v._v("而 "),_("code",[v._v("hjkl")]),v._v("、"),_("code",[v._v("shift")]),v._v(" + "),_("code",[v._v("j")]),v._v(" / "),_("code",[v._v("k")]),v._v(" （即映射后的 "),_("code",[v._v("5j")]),v._v(" "),_("code",[v._v("5k")]),v._v("）、"),_("code",[v._v("ctrl")]),v._v(" + "),_("code",[v._v("f")]),v._v(" / "),_("code",[v._v("b")]),v._v(" / "),_("code",[v._v("u")]),v._v(" / "),_("code",[v._v("d")]),v._v(" （翻页 / 翻半页）等是不会记录在 jump list 的；")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("特别说明")]),v._v(" "),_("p",[v._v("vim-sneak 的跳转只会记录一次")])]),v._v(" "),_("p",[v._v("由于 jump list 保留了光标的移动记录，我们可以通过 "),_("code",[v._v(":jumps")]),v._v(" 查看 jump list，vim 会显示金近 100 条记录；我们也可以可以在 jump list 中选中记录进行对应位置的跳转。")]),v._v(" "),_("p",[v._v("但是使用 "),_("code",[v._v(":jumps")]),v._v(" 查看 jump list 来进行跳转的操作比较繁琐，而且很多时候我们并不关心之前这么多的跳转，我们只在乎跳转的顺序，因为只有顺着 jump list 的顺序，我们总会跳到想去的位置，这时我们可以使用以下命令：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("ctrl")]),v._v(" + "),_("code",[v._v("i")]),v._v("：跳转到 jump list 的后一个记录")]),v._v(" "),_("li",[_("code",[v._v("ctrl")]),v._v(" + "),_("code",[v._v("o")]),v._v("：跳转到 jump list 的前一个记录")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("键位规律")]),v._v(" "),_("p",[v._v("如 "),_("code",[v._v("j")]),v._v(" "),_("code",[v._v("k")]),v._v(" 一样， "),_("code",[v._v("i")]),v._v(" "),_("code",[v._v("o")]),v._v(" 的按键位置也是一样的规律：表示下一个在左，表示上一个的在右")])]),v._v(" "),_("p",[v._v("如此这般，我们就可以在 jump list 中穿梭了；比如我们看到一个函数调用，想看看这个函数的内部实现，我们使用 "),_("code",[v._v("gd")]),v._v(" 跳转到它定义的地方；阅读完内部实现后，我们使用 "),_("code",[v._v("ctrl")]),v._v(" + "),_("code",[v._v("o")]),v._v(" 就可以再跳回去原本看到函数的调用的位置继续我们的工作。")]),v._v(" "),_("h2",{attrs:{id:"标记定位"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标记定位"}},[v._v("#")]),v._v(" 标记定位")]),v._v(" "),_("p",[v._v("上面我们提到了 "),_("code",[v._v("'")]),v._v(" 和 "),_("code",[v._v("`")]),v._v(" 这两个和标记有关的指令，那什么是标记？即当我们光标在某行代码时，可能我们要短暂地离开当前行甚至当前文件，我们就可以用这个命令做个标记，等我们在别的地方想回来时，就可以像回城技能一样，一按命令就回到标记的行甚至标记的列。")]),v._v(" "),_("h3",{attrs:{id:"命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[v._v("#")]),v._v(" 命令")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("m")]),v._v(" + [小写字母]：只可在单个文件内跳转的标记；后面的为标记的标识符，用于跳转的指向；可以理解为当前标记的名字；下同")]),v._v(" "),_("li",[_("code",[v._v("m")]),v._v(" + [大写字母]：可在多个文件之间跳转的标记")])]),v._v(" "),_("p",[v._v("比如我们在某个位置执行 "),_("code",[v._v("mm")]),v._v("，然后在本文件中的其他位置只要使用 "),_("code",[v._v("'m")]),v._v(" 就可以跳到标记的行，使用 "),_("code",[v._v("`m")]),v._v(" 就可以跳到标记的行和列；当然我们也可以用其他字母如 "),_("code",[v._v("mf")]),v._v("，当相应的跳转命令也变成 "),_("code",[v._v("'f")]),v._v(" 和 "),_("code",[v._v("`f")]),v._v("。")])])}),[],!1,null,null,null);_.default=e.exports}}]);