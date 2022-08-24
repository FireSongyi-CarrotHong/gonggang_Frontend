import * as React from 'react';
import CreateUserInfoTemplates from '../../../components/templates/CreateUserInfoTemplates';
// import InvitedUserTemplates from '../../components/templates/InvitedUserTemplates';


function roomopen() {
	return (
		<CreateUserInfoTemplates InfoInputType='roomName' >무슨 약속인가요?</CreateUserInfoTemplates>
		// <InvitedUserTemplates userName='박송이' count={4} roomName='끝내주게 멋진 조별과제' />
	)

}

export default roomopen