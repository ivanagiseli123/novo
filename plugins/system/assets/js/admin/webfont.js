/**
 * @package Helix Ultimate Framework
 * @author JoomShaper https://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2021 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or Later
 */
jQuery((function(t){t(".hu-webfont-list").chosen({width:"100%"}),Joomla.initColorPicker(".hu-font-color-input");let e=t(".hu-field-webfont").data("id");t("#"+e);function i(t){let e=t.find(".hu-webfont-list").val(),i=t.find(".hu-webfont-weight-list").val(),n=t.find(".hu-webfont-unit.active").find(".hu-unit-field-value").val(),s=t.find(".hu-font-color-input").val(),a=(t.find(".hu-webfont-subset-list").val(),t.find(".hu-font-line-height-input").val()),o=t.find("[name=hu-font-letter-spacing-input]").val(),l=t.find("input.hu-text-decoration").val(),c=t.find("input.hu-text-align").val(),f=t.find(".hu-webfont-preview");e&&f.css("font-family",e),i?f.css("font-weight",i):f.css("font-weight","100"),n?(/(em|rem|px|%)$/.test(o)||(n+="px"),n=n.replace(/\s+/,""),f.css("font-size",n)):f.css("font-size",""),s?f.css("color",s):f.css("color","#000000"),a?f.css("line-height",a):f.css("line-height",""),o?(/(em|rem|px|%)$/.test(o)||(o+="px"),o=o.replace(/\s+/,""),f.css("letter-spacing",o)):f.css("letter-spacing",""),l&&f.css("text-decoration",l),c&&f.css("text-align",c)}t(".hu-field-webfont").each((function(){i(t(this))})),t(document).on("change",".hu-webfont-list",(function(e){e.preventDefault();var n=t(this),s=n.val();if(-1!==t.inArray(s,["Arial","Tahoma","Verdana","Helvetica","Times New Roman","Trebuchet MS","Georgia"]))n.closest(".hu-field-webfont").find(".hu-webfont-subset-list").html("").trigger("liszt:updated");else{var a={action:"fontVariants",option:"com_ajax",helix:"ultimate",request:"task",data:{fontName:s},format:"json"};t.ajax({type:"POST",data:a,success:function(e){var i=t.parseJSON(e);n.closest(".hu-field-webfont").find(".hu-webfont-subset-list").html(i.subsets).trigger("liszt:updated")}});var o=n.val().replace(" ","+");t("head").append("<link href='//fonts.googleapis.com/css?family="+o+":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=swap' rel='stylesheet' type='text/css'>")}return i(t(this).closest(".hu-field-webfont")),!1})),t(document).on("change",".hu-webfont-unit .hu-unit-field-value",(function(e){e.preventDefault(),i(t(this).closest(".hu-field-webfont"))})),t(".hu-font-color-input").on("input",(function(e){e.preventDefault(),i(t(this).closest(".hu-field-webfont"))})),t(".hu-font-line-height-input").on("change",(function(e){e.preventDefault(),i(t(this).closest(".hu-field-webfont"))})),t("[name=hu-font-letter-spacing-input]").on("change",(function(e){e.preventDefault(),i(t(this).closest(".hu-field-webfont"))})),t(document).on("change",".hu-webfont-weight-list",(function(e){e.preventDefault(),i(t(this).closest(".hu-field-webfont"))})),t(document).on("change",".hu-webfont-style-list",(function(e){e.preventDefault(),i(t(this).closest(".hu-field-webfont"))})),t(".list-font-subset").on("change",(function(e){e.preventDefault();var i=t(this).closest(".hu-field-webfont").find(".hu-webfont-list").val().replace(" ","+");t("head").append("<link href='//fonts.googleapis.com/css?family="+i+":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&subset="+t(this).val()+"&display=swap' rel='stylesheet' type='text/css'>")})),t(".hu-font-decoration .hu-action-group .hu-switcher-action").on("click",(function(e){e.preventDefault(),e.stopPropagation(),t(this).siblings().removeClass("active"),t(this).addClass("active"),t(this).closest(".hu-font-decoration").find("input.hu-text-decoration").val(t(this).data("value")).trigger("change"),i(t(this).closest(".hu-field-webfont"))})),t(".hu-font-alignment .hu-action-group .hu-switcher-action").on("click",(function(e){e.preventDefault(),e.stopPropagation(),t(this).siblings().removeClass("active"),t(this).addClass("active"),t(this).closest(".hu-font-alignment").find("input.hu-text-align").val(t(this).data("value")).trigger("change"),i(t(this).closest(".hu-field-webfont"))})),t(document).on("click","#update_fonts",(function(e){e.preventDefault();var i=t(this);return t.ajax({type:"POST",data:{action:"update-font-list",option:"com_ajax",helix:"ultimate",request:"task",data:{},format:"json"},beforeSend:function(){i.find("span").addClass("fa-spin")},success:function(e){var n=t.parseJSON(e);n.status?i.after(n.message):(i.after("<p class='font-update-failed'>Unexpected error occurs. Please make sure that, you have inserted Google Font API key.</p>"),i.find("span").removeClass("fa-spin"))},complete(e){200===e.status&&(i.find("span").removeClass("fa-spin"),i.next().delay(2e3).fadeOut(300,(function(){t(this).remove()})))}}),!1}))}));