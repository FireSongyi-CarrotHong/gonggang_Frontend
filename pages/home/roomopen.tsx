import * as React from 'react';
import CreateUserInfoTemplates from '../../components/templates/CreateUserInfoTemplates';
import InvitedUserTemplates from '../../components/templates/InvitedUserTemplates';


function roomopen() {
	return (
		// <CreateUserInfoTemplates InfoInputType='roomName' >무슨 약속인가요?</CreateUserInfoTemplates>
		<InvitedUserTemplates />
	)

}

export default roomopen