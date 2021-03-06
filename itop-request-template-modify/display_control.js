$().ready(function(){
	var mode = $(".modal-body").find("form").attr('id');
	var index = mode.indexOf('objectform-ticket-create-');
	if(index < 0)
	{
		return;
	}
	$("div[data-field-id='request_template_ip_textarea']").attr("style", "display:none");
	displayTipsButton();
	displayTips();
});

function displayList()
{
	$("#le_server_accounts_request").attr("style", "display:block");
	$("div[data-field-id=request_template_ip_textarea]").attr("style", "display:none");
}
function displayTextarea()
{
	$("#le_server_accounts_request").attr("style", "display:none");
	$("div[data-field-id=request_template_ip_textarea]").attr("style", "display:block");					
}

function displayTipsButton()
{
	var button = '<div class="form-group"><label class="control-label">关联的服务器<\/label><div class="help-block"><\/div><div class="btn-group"><button class="btn btn-primary form_btn_transition" type="button" name="le_server_list" onclick="displayList()"><span class="glyphicon glyphicon-list"><\/span>  &nbsp;&nbsp;从列表勾选机器<\/button><button class="btn btn-info form_btn_transition" type="button" name="le_server_textarea" onclick="displayTextarea()"><span class="glyphicon glyphicon-text-height"><\/span>  &nbsp;&nbsp;直接输入IP地址<\/button><\/div><\/div>'
	$("div[data-field-id=request_template_ip_textarea]").before(button);
}

function displayTips()
{
	var inputval = $("div[data-field-id='template_data']").find("input").val();
	if(!inputval)
	{
		return;
	}
	var tips = $.parseJSON(inputval);
	if(tips.description.indexOf("提示</label>") >= 0)
	{
		$("div[data-field-id='user_data']").before(tips.description);
	}
}
