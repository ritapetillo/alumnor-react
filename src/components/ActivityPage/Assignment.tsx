import React from 'react'
import { IActivity } from '../../interfaces/redux/states/ICourseInitialState'
import { AssignmentPageWrap} from './activityPage.elements'
import Materials from './Materials'
import Submissions from './Submissions'


interface IAssignmentsProps {
  activity: IActivity | undefined;
  refreshActivity: () => void;
}
const Assignment = ({activity,refreshActivity}: IAssignmentsProps) => {
    
    return (
        <AssignmentPageWrap>
            <Materials activity={activity} refreshActivity={refreshActivity} task="Write Assignment here. You can also attach links, videos and images and upload documents." />
        
      </AssignmentPageWrap>
    )
}

export default Assignment
