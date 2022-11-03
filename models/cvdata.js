

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CvDataSchema = new Schema({
    
    Profile: {
        type: String,
        required: false
    },
    Date_of_applicaton: {
        type: String,
        required: false
    },   
    Source_Of_Application: {
        type: String,
        required: false
    },   
    Name:  {
        type: String,
        required: false
    },  
    Email_ID:  {
        type: String,
        required: false
    },  
    Phone_Number: {
        type: String,
        required: false
    } ,  
    Current_Location: {
        type: String,
        required: false
    },     
    Preferred_Locations:  {
        type: String,
        required: false
    },  
    Total_Experience: {
        type: String,
        required: false
    },   
    Curr_Company_name: {
        type: String,
        required: false
    },   
    Curr_Company_Designation: {
        type: String,
        required: false
    },   
    Functional_Area: {
        type: String,
        required: false
    },   
    Role: {
        type: String,
        required: false
    },   
    Industry: {
        type: String,
        required: false
    },   
    Key_Skills: {
        type: String,
        required: false
    },   
    Annual_Salary: {
        type: String,
        required: false
    },
    Notice_Period: {
        type: String,
        required: false
    },
    
    Resume_Headline: {
        type: String,
        required: false
    },
    
    Summary: {
        type: String,
        required: false
    },
    
    Under_Graduation_degree: {
        type: String,
        required: false
    },
    UG_Specialization: {
        type: String,
        required: false
    },
    UG_University_institute_Name: {
        type: String,
        required: false
    },
    UG_Graduation_year: {
        type: String,
        required: false
    },
    Post_graduation_degree: {
        type: String,
        required: false
    },
    PG_specialization: {
        type: String,
        required: false
    },
    PG_university_institute_name: {
        type: String,
        required: false
    },
    PG_graduation_year: {
        type: String,
        required: false
    },
    Doctorate_degree: {
        type: String,
        required: false
    },
    Doctorate_specialization: {
        type: String,
        required: false
    },
    Doctorate_university_institute_name: {
        type: String,
        required: false
    },
    Doctorate_graduation_year: {
        type: String,
        required: false
    },
    Gender: {
        type: String,
        required: false
    },
    Marital_Status: {
        type: String,
        required: false
    },
    Home_Town_City: {
        type: String,
        required: false
    },
    Pin_Code: {
        type: String,
        required: false
    },
    Work_permit_for_USA: {
        type: String,
        required: false
    },
    Current_Location: {
        type: String,
        required: false
    },
    Date_of_Birth: {
        type: String,
        required: false
    },
    Permanent_Address: {
        type: String,
        required: false
    },
    Last_Workflow_activity: {
        type: String,
        required: false
    },
    Last_Workflow_activity_by: {
        type: String,
        required: false
    },
    Time_of_Last_Workflow_activity_Update: {
        type: String,
        required: false
    },
    Latest_Pipeline_Stage: {
        type: String,
        required: false
    },
    Pipeline_Status_UpdatedBy: {
        type: String,
        required: false
    },
    Time_when_Stage_updated: {
        type: String,
        required: false
    },
    Latest_Star_Rating: {
        type: String,
        required: false
    },
    Download: {
        type: String,
        required: false
    },
    Downloaded_By: {
        type: String,
        required: false
    },
    Time_Of_Download: {
        type: String,
        required: false
    },
    Viewed: {
        type: String,
        required: false
    },
    Viewed_By: {
        type: String,
        required: false
    },
    
    Time_Of_View: {
        type: String,
        required: false
    },
    Emailed: {
        type: String,
        required: false
    },
    Emailed_By: {
        type: String,
        required: false
    },
    Time_Of_Email: {
        type: String,
        required: false
    },
    Calling_Status: {
        type: String,
        required: false
    },
    Calling_Status_updatedby: {
        type: String,
        required: false
    },
    Time_of_Calling_activity_update: {
        type: String,
        required: false
    },
    Comment_1: {
        type: String,
        required: false
    },
    Comment_1_BY: {
        type: String,
        required: false
    },
    Time_Comment_1_posted: {
        type: String,
        required: false
    },
    Comment_2: {
        type: String,
        required: false
    },
    Comment_2_BY: {
        type: String,
        required: false
    },
    Time_Comment_2_posted: {
        type: String,
        required: false
    },
    Comment_3: {
        type: String,
        required: false
    },
    Comment_3_BY: {
        type: String,
        required: false
    },
    Time_Comment_3_posted: {
        type: String,
        required: false
    },
    Comment_4: {
        type: String,
        required: false
    },
    Comment_4_BY: {
        type: String,
        required: false
    },
    Time_Comment_4_posted: {
        type: String,
        required: false
    },
    Comment_5: {
        type: String,
        required: false
    },
    Comment_5_BY: {
        type: String,
        required: false
    },
    Time_Comment_5_posted: {
        type: String,
        required: false
    },
    What_is_your_expected_annual_CTC_in_INR: {
        type: String,
        required: false
    },
    What_is_the_notice_period_in_your_current_company: {
        type: String,
        required: false
    },
   

 
},{timestamps:true});

 

module.exports = mongoose.model('CvDatas', CvDataSchema);

