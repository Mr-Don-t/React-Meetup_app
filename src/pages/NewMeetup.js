import { useHistory } from 'react-router-dom';



import NewMeetupForm from '../components/meetups/NewMeetupForm';





function NewMeetupPage(){
    const history= useHistory();
   function addMeetupHandler(meetupData){
 
       fetch( 'https://react-getting-started-16ff4-default-rtdb.firebaseio.com/meetups.json',
       {
           method:'POST',
           body:JSON.stringify(meetupData),
           headers:{
               'Content-Type':'application/json'
           }

       }).then(()=>{
           history.replace('/');
       });

   }


    return (
                <section>
                    <h1>Add new meetups</h1>
                    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
                </section>

    );
}
export default NewMeetupPage;