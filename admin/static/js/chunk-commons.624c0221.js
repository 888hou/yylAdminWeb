(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-commons"],{"142f":function(e,t,i){"use strict";i("f8fd")},"333d":function(e,t,i){"use strict";var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[i("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},r=[],o=(i("0ad8"),i("09f4")),a={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,12,15,18,20,30,50,80,100,150,200,300,500]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&Object(o["a"])(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&Object(o["a"])(0,800)}}},s=a,n=(i("3d15"),i("cba8")),c=Object(n["a"])(s,l,r,!1,null,"29c44d5e",null);t["a"]=c.exports},3659:function(e,t,i){"use strict";var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadup,expression:"loadup"}],staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{xs:24,sm:20}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:""},model:{value:e.query.search_field,callback:function(t){e.$set(e.query,"search_field",t)},expression:"query.search_field"}},[i("el-option",{attrs:{value:"file_name",label:"文件名称"}}),i("el-option",{attrs:{value:"file_id",label:"文件ID"}})],1),i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索内容",clearable:""},model:{value:e.query.search_value,callback:function(t){e.$set(e.query,"search_value",t)},expression:"query.search_value"}}),i("el-select",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:"时间类型"},model:{value:e.query.date_field,callback:function(t){e.$set(e.query,"date_field",t)},expression:"query.date_field"}},[i("el-option",{attrs:{value:"create_time",label:"添加时间"}}),i("el-option",{attrs:{value:"update_time",label:"修改时间"}})],1),i("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"240px"},attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.query.date_value,callback:function(t){e.$set(e.query,"date_value",t)},expression:"query.date_value"}}),i("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:function(t){return e.search()}}},[e._v("查询")]),i("el-button",{staticClass:"filter-item",on:{click:function(t){return e.refresh()}}},[e._v("刷新")])],1),i("el-col",{staticStyle:{"text-align":"right"},attrs:{xs:24,sm:4}},[i("el-button",{staticClass:"filter-item",staticStyle:{"margin-right":"5px"},attrs:{title:"回收站"},on:{click:function(t){return e.recover()}}},[e._v("回收站")]),i("el-upload",{staticClass:"filter-item",attrs:{name:"file",limit:e.uploadLimit,"file-list":e.uploadFilelist,multiple:!0,"show-file-list":!1,"auto-upload":!0,action:e.uploadAction,headers:e.uploadHeaders,data:e.uploadData,"before-upload":e.uploadBefore,"on-success":e.uploadSuccess,"on-error":e.uploadError,"on-change":e.uploadChange,"on-exceed":e.uploadExceed}},[i("el-button",{attrs:{type:"primary",title:"上传文件"},on:{click:e.uploadClear}},[e._v("上传")])],1)],1)],1)],1),i("el-row",{attrs:{gutter:6}},[i("el-col",{attrs:{span:4}},[i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{span:20}},[i("el-button",{staticStyle:{color:"inherit"},attrs:{type:"text"}},[e._v("分组")])],1),i("el-col",{attrs:{span:4}},[i("el-button",{attrs:{type:"text",icon:"el-icon-plus",title:"添加分组"},on:{click:function(t){return e.groupAdd()}}})],1)],1),i("el-row",{attrs:{gutter:0}},[i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:""==e.query.group_id?"primary":"",underline:!1},on:{click:function(t){return e.groupingSelect("")}}},[e._v("全部")])],1),e._l(e.group,(function(t){return i("el-col",{key:t.group_id,staticStyle:{"padding-left":"10px",height:"26px"},attrs:{span:24}},[i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{span:16}},[i("el-link",{attrs:{type:e.query.group_id==t.group_id?"primary":"",underline:!1},on:{click:function(i){return e.groupingSelect(t.group_id)}}},[e._v(e._s(t.group_name))])],1),i("el-col",{attrs:{span:4}},[e.query.group_id==t.group_id?i("el-link",{attrs:{type:"primary",icon:"el-icon-edit",underline:!1,title:"修改分组"},on:{click:function(i){return e.groupEdit(t)}}}):e._e()],1),i("el-col",{attrs:{span:4}},[e.query.group_id==t.group_id?i("el-link",{attrs:{type:"primary",icon:"el-icon-delete",underline:!1,title:"删除分组"},on:{click:function(i){return e.groupDele([t])}}}):e._e()],1)],1)],1)}))],2),i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{span:24}},[i("el-button",{staticStyle:{color:"inherit"},attrs:{type:"text"}},[e._v("类型")])],1)],1),i("el-row",{attrs:{gutter:0}},[i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:""==e.query.file_type?"primary":"",underline:!1},on:{click:function(t){return e.typeSelect("")}}},[e._v("全部")])],1),e._l(e.filetype,(function(t,l){return i("el-col",{key:l,staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:e.query.file_type==l?"primary":"",underline:!1},on:{click:function(t){return e.typeSelect(l)}}},[e._v(e._s(t))])],1)}))],2),i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{span:24}},[i("el-button",{staticStyle:{color:"inherit"},attrs:{type:"text"}},[e._v("状态")])],1)],1),i("el-row",{attrs:{gutter:0}},[i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:""===e.query.is_disable?"primary":"",underline:!1},on:{click:function(t){return e.disableSelect("")}}},[e._v("全部")])],1),i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:0===e.query.is_disable?"primary":"",underline:!1},on:{click:function(t){return e.disableSelect(0)}}},[e._v("已启用")])],1),i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:1===e.query.is_disable?"primary":"",underline:!1},on:{click:function(t){return e.disableSelect(1)}}},[e._v("已禁用")])],1)],1),i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{span:24}},[i("el-button",{staticStyle:{color:"inherit"},attrs:{type:"text"}},[e._v("上传")])],1)],1),i("el-row",{attrs:{gutter:0}},[i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:""===e.query.is_front?"primary":"",underline:!1},on:{click:function(t){return e.frontSelect("")}}},[e._v("全部")])],1),i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:0===e.query.is_front?"primary":"",underline:!1},on:{click:function(t){return e.frontSelect(0)}}},[e._v("后台")])],1),i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:1===e.query.is_front?"primary":"",underline:!1},on:{click:function(t){return e.frontSelect(1)}}},[e._v("前台")])],1)],1)],1),e.count>0?i("el-col",{staticClass:"dialog-body",style:{height:e.height-50+"px"},attrs:{span:20}},[i("el-row",{attrs:{gutter:6}},[i("el-checkbox-group",{on:{change:e.checkedChange},model:{value:e.checkedIds,callback:function(t){e.checkedIds=t},expression:"checkedIds"}},e._l(e.data,(function(t,l){return i("el-col",{key:l,staticStyle:{"margin-bottom":"6px","text-align":"center"},attrs:{span:4}},[i("el-card",{staticClass:"file-card",attrs:{"body-style":{minWidth:"16.5%",height:(e.height-80)/3+"px",padding:"0 6px"}}},[i("div",{staticClass:"file-ext"},[i("span",[e._v(e._s(t.file_ext))])]),i("div",{staticStyle:{"text-align":"left"}},[i("el-checkbox",{key:t.file_id,attrs:{label:t.file_id}})],1),i("div",{style:{width:"100%",height:(e.height-80)/3-(e.height-80)/3*.33+"px"}},["image"==t.file_type?i("el-image",{staticStyle:{height:"100%"},attrs:{fit:"contain",src:t.file_url,"preview-src-list":[t.file_url],title:"点击查看大图"}}):"video"==t.file_type?i("video",{attrs:{width:"100%",height:"100%",controls:""}},[i("source",{attrs:{src:t.file_url,type:"video/mp4"}}),i("object",{attrs:{data:t.file_url,width:"100%",height:"100%"}},[i("embed",{attrs:{src:t.file_url,width:"100%",height:"100%"}})])]):"audio"==t.file_type?i("audio",{attrs:{width:"100%",height:"100%",controls:""}},[i("source",{attrs:{src:t.file_url,type:"audio/mp3"}}),i("embed",{attrs:{src:t.file_url,width:"100%",height:"100%"}})]):"word"==t.file_type?i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.file_url}},[i("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"el-icon-document",staticStyle:{"font-size":"50px"}})])]):i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.file_url}},[i("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"el-icon-folder",staticStyle:{"font-size":"50px"}})])])],1),i("div",{staticStyle:{"padding-top":"6px"}},[i("span",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",display:"block","padding-right":"0","font-size":"14px"},attrs:{title:t.file_name}},[e._v(" "+e._s(t.file_name)+" ")]),i("div",{staticClass:"bottom clearfix"},[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(i){return e.edit(t,"name")}}},[e._v("编辑")]),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(i){return e.edit(t,"url")}}},[e._v("链接")]),t.is_disable?i("el-button",{attrs:{size:"mini",type:"text",title:"点击启用文件"},on:{click:function(i){return e.disable([t.file_id],0)}}},[e._v("启用")]):i("el-button",{attrs:{size:"mini",type:"text",title:"点击禁用文件"},on:{click:function(i){return e.disable([t.file_id],1)}}},[e._v("禁用")]),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(i){return e.dele([t.file_id])}}},[e._v("删除")])],1)])])],1)})),1)],1)],1):i("el-col",{attrs:{span:20}},[i("el-empty",{attrs:{description:"暂无文件"}})],1)],1),i("el-row",{directives:[{name:"show",rawName:"v-show",value:e.count>0,expression:"count > 0"}],attrs:{gutter:0}},[i("el-col",{attrs:{span:24}},[i("el-checkbox",{attrs:{border:"",size:"mini",indeterminate:e.checkAllInd},on:{change:e.checkAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.grouping(e.checkedIds)}}},[e._v("分组")]),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.disable(e.checkedIds,0)}}},[e._v("启用")]),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.disable(e.checkedIds,1)}}},[e._v("禁用")]),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.dele(e.checkedIds)}}},[e._v("删除")])],1)],1),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.count>0,expression:"count > 0"}],attrs:{total:e.count,page:e.query.page,limit:e.query.limit},on:{"update:page":function(t){return e.$set(e.query,"page",t)},"update:limit":function(t){return e.$set(e.query,"limit",t)},pagination:e.list}}),i("el-row",{directives:[{name:"show",rawName:"v-show",value:e.fileType,expression:"fileType"}],attrs:{gutter:0}},[i("el-col",{staticStyle:{"text-align":"right","margin-top":"20px"},attrs:{span:24}},[i("el-button",{on:{click:function(t){return e.fileCancel()}}},[e._v("取消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.fileSubmit(e.checkedIds)}}},[e._v("确定")])],1)],1),i("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialog,width:"50%",top:"1vh","before-close":e.cancel},on:{"update:visible":function(t){e.dialog=t}}},[i("el-form",{ref:"ref",staticClass:"dialog-body",style:{height:e.height+"px"},attrs:{rules:e.rules,model:e.model,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"文件分组",prop:"group_id"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:""},model:{value:e.model.group_id,callback:function(t){e.$set(e.model,"group_id",t)},expression:"model.group_id"}},e._l(e.group,(function(e,t){return i("el-option",{key:t,attrs:{value:e.group_id,label:e.group_name}})})),1)],1),i("el-form-item",{attrs:{label:"文件类型",prop:"file_type"}},[i("el-select",{attrs:{placeholder:""},model:{value:e.model.file_type,callback:function(t){e.$set(e.model,"file_type",t)},expression:"model.file_type"}},e._l(e.filetype,(function(e,t){return i("el-option",{key:t,attrs:{value:t,label:e}})})),1)],1),i("el-form-item",{attrs:{label:"是否禁用",prop:"is_disable"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:""},model:{value:e.model.is_disable,callback:function(t){e.$set(e.model,"is_disable",t)},expression:"model.is_disable"}},[i("el-option",{attrs:{value:0,label:"否"}}),i("el-option",{attrs:{value:1,label:"是"}})],1)],1),i("el-form-item",{attrs:{label:"文件排序",prop:"sort"}},[i("el-input",{attrs:{type:"number",placeholder:"200"},model:{value:e.model.sort,callback:function(t){e.$set(e.model,"sort",t)},expression:"model.sort"}})],1),i("el-form-item",{attrs:{label:"文件名称",prop:"file_name"}},[i("el-input",{attrs:{placeholder:"",title:e.model.file_name},model:{value:e.model.file_name,callback:function(t){e.$set(e.model,"file_name",t)},expression:"model.file_name"}},[i("el-link",{attrs:{slot:"append",href:e.model.file_url,underline:!1,download:e.model.file_url,target:"_blank"},slot:"append"},[e._v("下载")])],1)],1),i("el-form-item",{attrs:{label:"文件路径",prop:"file_path"}},[i("el-input",{attrs:{placeholder:"",title:e.model.file_path,disabled:""},model:{value:e.model.file_path,callback:function(t){e.$set(e.model,"file_path",t)},expression:"model.file_path"}},[i("el-button",{attrs:{slot:"append"},on:{click:function(t){return e.copy(e.model.file_path,t)}},slot:"append"},[e._v("复制")])],1)],1),i("el-form-item",{attrs:{label:"文件链接",prop:"file_url"}},[i("el-input",{attrs:{placeholder:"",title:e.model.file_url,disabled:""},model:{value:e.model.file_url,callback:function(t){e.$set(e.model,"file_url",t)},expression:"model.file_url"}},[i("el-button",{attrs:{slot:"append"},on:{click:function(t){return e.copy(e.model.file_url,t)}},slot:"append"},[e._v("复制")])],1)],1),i("el-form-item",{attrs:{label:"存储方式",prop:"storage"}},[i("el-select",{attrs:{placeholder:"",disabled:""},model:{value:e.model.storage,callback:function(t){e.$set(e.model,"storage",t)},expression:"model.storage"}},e._l(e.storage,(function(e,t){return i("el-option",{key:t,attrs:{value:t,label:e}})})),1)],1),i("el-form-item",{attrs:{label:"文件大小",prop:"file_size"}},[i("el-input",{attrs:{placeholder:"",disabled:""},model:{value:e.model.file_size,callback:function(t){e.$set(e.model,"file_size",t)},expression:"model.file_size"}})],1),i("el-form-item",{attrs:{label:"文件后缀",prop:"file_ext"}},[i("el-input",{attrs:{placeholder:"",disabled:""},model:{value:e.model.file_ext,callback:function(t){e.$set(e.model,"file_ext",t)},expression:"model.file_ext"}})],1),i("el-form-item",{attrs:{label:"文件哈希",prop:"file_hash"}},[i("el-input",{attrs:{placeholder:"",disabled:""},model:{value:e.model.file_hash,callback:function(t){e.$set(e.model,"file_hash",t)},expression:"model.file_hash"}})],1),e.model.file_id?i("el-form-item",{attrs:{label:"添加时间",prop:"create_time"}},[i("el-input",{attrs:{disabled:""},model:{value:e.model.create_time,callback:function(t){e.$set(e.model,"create_time",t)},expression:"model.create_time"}})],1):e._e(),e.model.file_id?i("el-form-item",{attrs:{label:"修改时间",prop:"update_time"}},[i("el-input",{attrs:{disabled:""},model:{value:e.model.update_time,callback:function(t){e.$set(e.model,"update_time",t)},expression:"model.update_time"}})],1):e._e()],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.cancel}},[e._v("取消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1),i("el-dialog",{attrs:{title:"文件分组",visible:e.groupingDialog},on:{"update:visible":function(t){e.groupingDialog=t}}},[i("el-form",{ref:"groupingRef",staticClass:"dialog-body",attrs:{"label-width":"100px"}},[i("el-form-item",{attrs:{label:"文件分组",prop:"group_id"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:""},model:{value:e.group_id,callback:function(t){e.group_id=t},expression:"group_id"}},e._l(e.group,(function(e,t){return i("el-option",{key:t,attrs:{value:e.group_id,label:e.group_name}})})),1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.groupingCancel}},[e._v("取消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.groupingSubmit}},[e._v("提交")])],1)],1),i("el-dialog",{attrs:{title:e.groupTitle,visible:e.groupDialog,"before-close":e.groupCancel},on:{"update:visible":function(t){e.groupDialog=t}}},[i("el-form",{ref:"groupRef",staticClass:"dialog-body",attrs:{rules:e.groupRules,model:e.groupModel,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"名称",prop:"group_name"}},[i("el-input",{attrs:{placeholder:"请输入分组名称",clearable:""},model:{value:e.groupModel.group_name,callback:function(t){e.$set(e.groupModel,"group_name",t)},expression:"groupModel.group_name"}})],1),i("el-form-item",{attrs:{label:"描述",prop:"group_desc"}},[i("el-input",{attrs:{clearable:""},model:{value:e.groupModel.group_desc,callback:function(t){e.$set(e.groupModel,"group_desc",t)},expression:"groupModel.group_desc"}})],1),i("el-form-item",{attrs:{label:"排序",prop:"group_sort"}},[i("el-input",{attrs:{type:"number"},model:{value:e.groupModel.group_sort,callback:function(t){e.$set(e.groupModel,"group_sort",t)},expression:"groupModel.group_sort"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.groupCancel}},[e._v("取消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.groupSubmit}},[e._v("提交")])],1)],1),i("el-dialog",{attrs:{title:e.recoverDialogTitle,visible:e.recoverDialog,width:"80%",top:"1vh"},on:{"update:visible":function(t){e.recoverDialog=t}}},[i("div",{staticClass:"filter-container"},[i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{xs:24,sm:24}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:""},model:{value:e.recoverQuery.search_field,callback:function(t){e.$set(e.recoverQuery,"search_field",t)},expression:"recoverQuery.search_field"}},[i("el-option",{attrs:{value:"file_name",label:"文件名称"}}),i("el-option",{attrs:{value:"file_id",label:"文件ID"}})],1),i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索内容",clearable:""},model:{value:e.recoverQuery.search_value,callback:function(t){e.$set(e.recoverQuery,"search_value",t)},expression:"recoverQuery.search_value"}}),i("el-select",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:"时间类型"},model:{value:e.recoverQuery.date_field,callback:function(t){e.$set(e.recoverQuery,"date_field",t)},expression:"recoverQuery.date_field"}},[i("el-option",{attrs:{value:"delete_time",label:"删除时间"}}),i("el-option",{attrs:{value:"update_time",label:"修改时间"}})],1),i("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"240px"},attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.recoverQuery.date_value,callback:function(t){e.$set(e.recoverQuery,"date_value",t)},expression:"recoverQuery.date_value"}}),i("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:function(t){return e.recoverSearch()}}},[e._v("查询")]),i("el-button",{staticClass:"filter-item",on:{click:function(t){return e.recoverRefresh()}}},[e._v("刷新")])],1)],1)],1),i("el-row",{attrs:{gutter:6}},[i("el-col",{attrs:{span:4}},[i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{span:20}},[i("el-button",{staticStyle:{color:"inherit"},attrs:{type:"text"}},[e._v("分组")])],1)],1),i("el-row",{attrs:{gutter:0}},[i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:""==e.recoverQuery.group_id?"primary":"",underline:!1},on:{click:function(t){return e.recoverGroupSelect("")}}},[e._v("全部")])],1),e._l(e.group,(function(t){return i("el-col",{key:t.group_id,staticStyle:{"padding-left":"10px",height:"26px"},attrs:{span:24}},[i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{span:16}},[i("el-link",{attrs:{type:e.recoverQuery.group_id==t.group_id?"primary":"",underline:!1},on:{click:function(i){return e.recoverGroupSelect(t.group_id)}}},[e._v(e._s(t.group_name))])],1)],1)],1)}))],2),i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{span:24}},[i("el-button",{staticStyle:{color:"inherit"},attrs:{type:"text"}},[e._v("类型")])],1)],1),i("el-row",{attrs:{gutter:0}},[i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:""==e.recoverQuery.file_type?"primary":"",underline:!1},on:{click:function(t){return e.recoverTypeSelect("")}}},[e._v("全部")])],1),e._l(e.filetype,(function(t,l){return i("el-col",{key:l,staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:e.recoverQuery.file_type==l?"primary":"",underline:!1},on:{click:function(t){return e.recoverTypeSelect(l)}}},[e._v(e._s(t))])],1)}))],2),i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{span:24}},[i("el-button",{staticStyle:{color:"inherit"},attrs:{type:"text"}},[e._v("状态")])],1)],1),i("el-row",{attrs:{gutter:0}},[i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:""===e.recoverQuery.is_disable?"primary":"",underline:!1},on:{click:function(t){return e.recoverDisableSelect("")}}},[e._v("全部")])],1),i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:0===e.recoverQuery.is_disable?"primary":"",underline:!1},on:{click:function(t){return e.recoverDisableSelect(0)}}},[e._v("已启用")])],1),i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:1===e.recoverQuery.is_disable?"primary":"",underline:!1},on:{click:function(t){return e.recoverDisableSelect(1)}}},[e._v("已禁用")])],1)],1),i("el-row",{attrs:{gutter:0}},[i("el-col",{attrs:{span:24}},[i("el-button",{staticStyle:{color:"inherit"},attrs:{type:"text"}},[e._v("上传")])],1)],1),i("el-row",{attrs:{gutter:0}},[i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:""===e.recoverQuery.is_front?"primary":"",underline:!1},on:{click:function(t){return e.recoverFrontSelect("")}}},[e._v("全部")])],1),i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:0===e.recoverQuery.is_front?"primary":"",underline:!1},on:{click:function(t){return e.recoverFrontSelect(0)}}},[e._v("后台")])],1),i("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:24}},[i("el-link",{staticStyle:{height:"26px"},attrs:{type:1===e.recoverQuery.is_front?"primary":"",underline:!1},on:{click:function(t){return e.recoverFrontSelect(1)}}},[e._v("前台")])],1)],1)],1),i("el-col",{staticClass:"dialog-body",style:{height:e.height-50+"px"},attrs:{span:20}},[e.recoverCount>0?i("el-row",{attrs:{gutter:6}},[i("el-checkbox-group",{on:{change:e.recoverCheckedChange},model:{value:e.recoverCheckedIds,callback:function(t){e.recoverCheckedIds=t},expression:"recoverCheckedIds"}},e._l(e.recoverData,(function(t,l){return i("el-col",{key:l,staticStyle:{"margin-bottom":"6px","text-align":"center"},attrs:{span:4}},[i("el-card",{staticClass:"file-card",attrs:{"body-style":{minWidth:"16.5%",height:(e.height-80)/3+"px",padding:"0 6px"}}},[i("div",{staticClass:"file-ext"},[i("span",[e._v(e._s(t.file_ext))])]),i("div",{staticStyle:{"text-align":"left"}},[i("el-checkbox",{key:t.file_id,attrs:{label:t.file_id}})],1),i("div",{style:{width:"100%",height:(e.height-80)/3-(e.height-80)/3*.33+"px"}},["image"==t.file_type?i("el-image",{staticStyle:{height:"100%"},attrs:{fit:"contain",src:t.file_url,"preview-src-list":[t.file_url],title:"点击查看大图"}}):"video"==t.file_type?i("video",{attrs:{width:"100%",height:"100%",controls:""}},[i("source",{attrs:{src:t.file_url,type:"video/mp4"}}),i("object",{attrs:{data:t.file_url,width:"100%",height:"100%"}},[i("embed",{attrs:{src:t.file_url,width:"100%",height:"100%"}})])]):"audio"==t.file_type?i("audio",{attrs:{width:"100%",height:"100%",controls:""}},[i("source",{attrs:{src:t.file_url,type:"audio/mp3"}}),i("embed",{attrs:{src:t.file_url,width:"100%",height:"100%"}})]):"word"==t.file_type?i("el-image",{staticStyle:{"max-width":"100%","max-height":"100%"},attrs:{src:t.file_url}},[i("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"el-icon-document",staticStyle:{"font-size":"50px"}})])]):i("el-image",{staticStyle:{"max-width":"100%","max-height":"100%"},attrs:{src:t.file_url}},[i("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"el-icon-folder",staticStyle:{"font-size":"50px"}})])])],1),i("div",{staticStyle:{"padding-top":"6px"}},[i("span",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",display:"block","padding-right":"0","font-size":"14px"},attrs:{title:t.file_name}},[e._v(" "+e._s(t.file_name)+" ")]),i("div",{staticClass:"bottom clearfix"},[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(i){return e.recoverReco([t.file_id])}}},[e._v("恢复")]),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(i){return e.recoverDele([t.file_id])}}},[e._v("删除")])],1)])])],1)})),1)],1):i("el-row",{attrs:{gutter:6}},[i("el-col",{attrs:{span:24}},[i("el-empty",{attrs:{description:"暂无文件"}})],1)],1)],1)],1),i("el-row",{directives:[{name:"show",rawName:"v-show",value:e.recoverCount>0,expression:"recoverCount > 0"}],attrs:{gutter:0}},[i("el-col",{attrs:{span:24}},[i("el-checkbox",{attrs:{border:"",size:"mini",indeterminate:e.recoverCheckAllInd},on:{change:e.recoverCheckAllChange},model:{value:e.recoverCheckAll,callback:function(t){e.recoverCheckAll=t},expression:"recoverCheckAll"}},[e._v("全选")]),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.recoverReco(e.recoverCheckedIds)}}},[e._v("恢复")]),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.recoverDele(e.recoverCheckedIds)}}},[e._v("删除")])],1)],1),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.recoverCount>0,expression:"recoverCount > 0"}],attrs:{total:e.recoverCount,page:e.recoverQuery.page,limit:e.recoverQuery.limit},on:{"update:page":function(t){return e.$set(e.recoverQuery,"page",t)},"update:limit":function(t){return e.$set(e.recoverQuery,"limit",t)},pagination:e.recoverList}})],1)],1)},r=[],o=(i("2fa7"),i("98b1")),a=i("333d"),s=i("4381"),n=i("f71e"),c=i("5f87"),u=i("e08b"),d=i("0532"),p={name:"FileManage",components:{Pagination:a["a"]},directives:{permission:s["a"]},props:{groupId:{type:String,default:""},fileType:{type:String,default:""}},data:function(){return{name:"文件",height:680,loadup:!1,loading:!1,query:{page:1,limit:18,group_id:"",file_type:"",is_disable:"",is_front:0,search_field:"file_name",date_field:"create_time"},data:[],count:1,dialog:!1,dialogTitle:"",model:{file_id:"",group_id:"",file_name:"",file_type:"",file_url:"",sort:200},group:[],storage:[],filetype:[],checkIds:[],checkAll:!1,checkAllInd:!1,checkedIds:[],groupingDialog:!1,group_id:0,uploadAction:Object(u["a"])(),uploadHeaders:{AdminToken:Object(c["d"])()},uploadData:{},uploadLimit:9,uploadFilelist:[],rules:{file_name:[{required:!0,message:"请输入文件名称",trigger:"blur"}]},groupDialog:!1,groupTitle:"",groupModel:{group_id:"",group_name:"",group_desc:"",group_sort:50},groupRules:{group_name:[{required:!0,message:"请输入分组名称",trigger:"blur"}]},recoverCheckIds:[],recoverCheckAll:!1,recoverCheckAllInd:!1,recoverCheckedIds:[],recoverDialog:!1,recoverDialogTitle:"",recoverLoad:!1,recoverData:[],recoverCount:0,recoverQuery:{page:1,limit:18,group_id:"",file_type:"",is_disable:"",is_front:"",search_field:"file_name",date_field:"delete_time"},recoverSelection:[]}},watch:{fileType:function(e,t){this.query.group_id=this.groupId,this.query.file_type=this.fileType,this.list()}},created:function(){this.groupId&&(this.query.group_id=this.groupId),this.fileType?(this.query.file_type=this.fileType,this.query.is_disable=0,this.height=Object(o["a"])(310)):this.height=Object(o["a"])(),this.groupList(),this.list()},methods:{list:function(){var e=this;this.loading=!0,Object(u["h"])(this.query).then((function(t){e.data=t.data.list,e.count=t.data.count,e.checkIds=t.data.ids,e.filetype=t.data.filetype,e.storage=t.data.storage,e.loading=!1})).catch((function(){e.loading=!1}))},search:function(){this.query.page=1,this.list()},uploadBefore:function(){this.loadup=!0},uploadSuccess:function(e){200===e.code?(this.refresh(),this.$message.success(e.msg)):this.$message.error(e.msg),this.loadup=!1},uploadError:function(e){this.$message.error(e.msg||"上传出错"),this.loadup=!1},uploadChange:function(){},uploadExceed:function(){this.$message.error("每次最多选择 ".concat(this.uploadLimit," 个文件"))},uploadClear:function(){this.uploadFilelist=[]},edit:function(e){var t=this;this.dialog=!0,this.loading=!0,this.dialogTitle=this.name+"修改："+e.file_id,Object(u["g"])({file_id:e.file_id}).then((function(e){t.reset(e.data),t.loading=!1})).catch((function(){t.loading=!1}))},dele:function(e){var t=this;if(0===e.length)this.checkAlert();else{var i="删除"+this.name,l='确定要删除选中的 <span style="color:red">'+e.length+" </span> 个"+this.name+"吗？";1===e.length&&(i=i+"："+e[0],l="确定要删除"+this.name+"吗？"),this.$confirm(l,i,{type:"warning",dangerouslyUseHTMLString:!0}).then((function(){t.loading=!0,Object(u["b"])({file_ids:e}).then((function(e){t.list(),t.reset(),t.$message.success(e.msg)})).catch((function(){t.loading=!1}))})).catch((function(){}))}},refresh:function(){this.query=this.$options.data().query,this.groupList(),this.list()},cancel:function(){this.dialog=!1,this.reset()},submit:function(){var e=this;this.$refs["ref"].validate((function(t){t&&(e.loading=!0,e.model.file_id&&Object(u["d"])(e.model,"post").then((function(t){e.list(),e.reset(),e.dialog=!1,e.$message.success(t.msg)})).catch((function(){e.loading=!1})))}))},reset:function(e){this.model=e||this.$options.data().model,this.group_id=0,this.checkedIds=[],this.checkAll=!1,this.checkAllInd=!1,void 0!==this.$refs["ref"]&&this.$refs["ref"].resetFields()},grouping:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;0===e.length?this.checkAlert():(this.groupingDialog=!0,this.checkedIds=e,this.group_id=t)},groupingCancel:function(){this.reset(),this.groupingDialog=!1},groupingSubmit:function(){var e=this;0===this.checkedIds.length?this.checkAlert():(this.loading=!0,Object(u["f"])({file_ids:this.checkedIds,group_id:this.group_id}).then((function(t){e.list(),e.reset(),e.groupingDialog=!1,e.$message.success(t.msg)})).catch((function(){e.list(),e.loading=!1})))},groupingSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.query.group_id=e,this.list()},typeSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.query.file_type=e,this.list()},disableSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.query.is_disable=e,this.list()},frontSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.query.is_front=e,this.list()},disable:function(e,t){var i=this;0===e.length?this.checkAlert():1===t?this.$confirm("禁用文件会对已使用该文件的业务造成影响！<br>确定要禁用文件吗？","禁用文件",{type:"warning",dangerouslyUseHTMLString:!0}).then((function(){i.loading=!0,Object(u["c"])({file_ids:e,is_disable:t}).then((function(e){i.list(),i.reset(),i.$message.success(e.msg)})).catch((function(){i.list(),i.loading=!1}))})).catch((function(){})):(this.loading=!0,Object(u["c"])({file_ids:e,is_disable:t}).then((function(e){i.list(),i.reset(),i.$message.success(e.msg)})).catch((function(){i.list(),i.loading=!1})))},checkedChange:function(e){var t=e.length;this.checkAll=t===this.checkIds.length,this.checkAllInd=t>0&&t<this.checkIds.length},checkAllChange:function(e){this.checkedIds=e?this.checkIds:[],this.checkAllInd=!1},checkAlert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$alert(e||"请选择需要操作的"+this.name,"提示",{confirmButtonText:"确定",type:"warning",callback:function(e){}})},copy:function(e,t){Object(n["a"])(e,t)},groupList:function(){var e=this;Object(u["e"])().then((function(t){e.group=t.data.list})).catch((function(e){}))},groupAdd:function(){this.groupDialog=!0,this.groupTitle="分组添加",this.groupReset()},groupEdit:function(e){var t=this;this.groupDialog=!0,this.groupTitle="分组修改："+e.group_id,Object(d["e"])({group_id:e.group_id}).then((function(e){t.groupReset(e.data)})).catch((function(e){t.groupDialog=!1}))},groupCancel:function(){this.groupDialog=!1,this.groupReset()},groupSubmit:function(){var e=this;this.$refs["groupRef"].validate((function(t){t&&(e.loading=!0,e.groupModel.group_id?Object(d["d"])(e.groupModel).then((function(t){e.groupList(),e.groupReset(),e.groupDialog=!1,e.$message.success(t.msg)})).catch((function(){e.loading=!1})):Object(d["a"])(e.groupModel).then((function(t){e.groupList(),e.groupReset(),e.groupDialog=!1,e.$message.success(t.msg)})).catch((function(){e.loading=!1})))}))},groupDele:function(e){var t=this;if(0===e.length)this.selectAlert();else{var i="删除分组",l='确定要删除选中的 <span style="color:red">'+e.length+" </span> 条记录吗？";1===e.length&&(i=i+"："+e[0].group_id,l='确定要删除分组 <span style="color:red">'+e[0].group_name+" </span>吗？"),this.$confirm(l,i,{type:"warning",dangerouslyUseHTMLString:!0}).then((function(){t.loading=!0,Object(d["b"])({group:e}).then((function(e){t.groupList(),t.$message.success(e.msg)})).catch((function(){t.loading=!1}))})).catch((function(){}))}},groupReset:function(e){this.groupModel=e||this.$options.data().groupModel},recover:function(){this.recoverDialog=!0,this.recoverDialogTitle=this.name+"回收站",this.recoverList()},recoverList:function(){var e=this;this.recoverLoad=!0,this.recoverReset(),Object(u["i"])(this.recoverQuery).then((function(t){e.recoverData=t.data.list,e.recoverCount=t.data.count,e.recoverCheckIds=t.data.ids,e.recoverLoad=!1})).catch((function(){e.recoverLoad=!1}))},recoverGroupSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.recoverQuery.group_id=e,this.recoverList()},recoverTypeSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.recoverQuery.file_type=e,this.recoverList()},recoverFrontSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.recoverQuery.is_front=e,this.recoverList()},recoverDisableSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.recoverQuery.is_disable=e,this.recoverList()},recoverSearch:function(){this.recoverQuery.page=1,this.recoverList()},recoverRefresh:function(){this.recoverQuery=this.$options.data().recoverQuery,this.recoverList()},recoverSort:function(e){this.recoverQuery.sort_field=e.prop,this.recoverQuery.sort_value="","ascending"===e.order&&(this.recoverQuery.sort_value="asc",this.recoverList()),"descending"===e.order&&(this.recoverQuery.sort_value="desc",this.recoverList())},recoverCheckedChange:function(e){var t=e.length;this.recoverCheckAll=t===this.recoverCheckIds.length,this.recoverCheckAllInd=t>0&&t<this.recoverCheckIds.length},recoverCheckAllChange:function(e){this.recoverCheckedIds=e?this.recoverCheckIds:[],this.recoverCheckAllInd=!1},recoverCheckAlert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$alert(e||"请选择需要操作的"+this.name,"提示",{confirmButtonText:"确定",type:"warning",callback:function(e){}})},recoverReco:function(e){var t=this;if(0===e.length)this.recoverCheckAlert();else{var i="恢复"+this.name,l='确定要恢复选中的 <span style="color:red">'+e.length+" </span> 个"+this.name+"吗？";1===e.length&&(i=i+"："+e[0],l="确定要恢复"+this.name+"吗？"),this.$confirm(l,i,{type:"warning",dangerouslyUseHTMLString:!0}).then((function(){t.recoverLoad=!0,Object(u["k"])({file_ids:e}).then((function(e){t.list(),t.recoverList(),t.$message.success(e.msg)})).catch((function(){t.recoverLoad=!1}))})).catch((function(){}))}},recoverDele:function(e){var t=this;if(0===e.length)this.recoverCheckAlert();else{var i="彻底删除"+this.name,l='确定要彻底删除选中的 <span style="color:red">'+e.length+" </span> 个"+this.name+"吗？";1===e.length&&(i=i+"："+e[0],l="确定要彻底删除"+this.name+"吗？"),l="彻底删除文件会对已使用该文件的业务造成影响！<br>"+l,this.$confirm(l,i,{type:"warning",dangerouslyUseHTMLString:!0}).then((function(){t.recoverLoad=!0,Object(u["j"])({file_ids:e}).then((function(e){t.recoverList(),t.$message.success(e.msg)})).catch((function(){t.recoverLoad=!1}))})).catch((function(){}))}},recoverReset:function(){this.recoverCheckedIds=[],this.recoverCheckAll=!1,this.recoverCheckAllInd=!1},fileCancel:function(){this.checkedIds=[],this.$emit("file-lists",null)},fileSubmit:function(e){if(0===e.length)this.recoverCheckAlert("请选择文件");else{for(var t=[],i=this.data,l=i.length,r=e.length,o=0;o<l;o++)for(var a=0;a<r;a++)i[o].file_id===e[a]&&t.push(i[o]);this.checkedIds=[],this.$emit("file-lists",t,this.fileType)}}}},h=p,g=(i("142f"),i("cba8")),f=Object(g["a"])(h,l,r,!1,null,"325d3b2b",null);t["a"]=f.exports},"3d15":function(e,t,i){"use strict";i("931d")},"931d":function(e,t,i){},f8fd:function(e,t,i){}}]);