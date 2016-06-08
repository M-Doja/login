function demo2(){
	var options = {
			cancel          : true,
			cancelText		: 'cancel button',
			cancelCallBack 	:function(event){
				console.log('options.cancelCallBack');
			},
			delay           :300,
			confirm	  		: true,
			confirmText 	: 'confirm button',
			confirmCallBack : function(event){
				console.log('options.confirmCallBack');
			}
		}
	alert('<h1>Add A Profile</h1>','demo 2 show message',options);
}
function demo3(){
	var options = {
			cancel          : true,
			cancelText		: 'cancel',
			cancelCallBack 	:function(event){
				console.log('options.cancelCallBack');
			},
			delay           :0,
			confirm	  		: true,
			confirmText 	: 'confirm',
			confirmCallBack : function(event){
				console.log('options.confirmCallBack');
			}
		}
	alert('<h1>Edit Profile</h1>','<md-input-container class="log"><label for="userName">User Name:</label><br><input class="focus" id="userName"ng-model="nav.user.username"></md-input-container><md-input-container class="log"><br><label for="userEmail">Email:</label><br><input type="email" id="userEmail"ng-model="nav.user.email"style="margin-bottom:5px" required></md-input-container><md-input-container class="log"><label for="userPassword">Password:</label><br>    <input id="userPassword"type="password"ng-model="nav.user.password"></md-input-container><md-input-container class="log"><br><label for="conPassword">Confirm Password:</label><br><input id="conPassword"type="password" ng-model="nav.user.confirmPassword"style="margin-bottom:-10px" required></md-input-container><br><div ng-show="nav.user.password && nav.user.confirmPassword && !(nav.user.password === nav.user.confirmPassword)" style="color: red">Your passwords must match.</div>',options);
}
function demo4(){
	var options = {
			cancel          : true,
			cancelText		: 'cancel',
			cancelCallBack 	:function(event){
				console.log('options.cancelCallBack');
			},
			delay           :300,
			confirm	  		: true,
			confirmText 	: 'confirm',
			confirmCallBack : function(event){
				console.log('options.confirmCallBack');
			}
		}
	alert('<h1>Add An Event</h1>','demo 4 show message',options);
}
function demo5(){
	var options = {
			cancel          : true,
			cancelText		: 'cancel button',
			cancelCallBack 	:function(event){
				console.log('options.cancelCallBack');
			},
			delay           :300,
			confirm	  		: true,
			confirmText 	: 'confirm button',
			confirmCallBack : function(event){
				console.log('options.confirmCallBack');
			}
		}
	alert('<h1>Upgrade</h1>','demo 5 show message',options);
}
