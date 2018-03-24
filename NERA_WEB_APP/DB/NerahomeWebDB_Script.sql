Create database NerahomeWeb
go
use NerahomeWeb

go
Create table APP_Auto_Number(
Refer_Key VARCHAR(150) primary key
,Refer_Value int
)
go
Create table APP_Dic_Domain(
Domain_Name	VARCHAR(150)
,Tbl_Id INT PRIMARY KEY
,Parram_Key VARCHAR(150)
,Parram_Value NVARCHAR(255)
,Parram_Order int
,[Enable] bit default 1
)

go
Create table APP_SYS_Parrams(
Parram_Key VARCHAR(150) Primary Key
,Parram_Value NVARCHAR(255)
,[Enable] bit default 1
)
go
Create table Cs_Menu_item(
Item_Id int primary key
,Item_Name Nvarchar(100)
,[Enable] bit default 1
,Item_Type Varchar(3)
,Meta_Desc NVarchar(255)
,Meta_Key NVarchar(255)
,[Language] VARCHAR(2)
,Item_Content NVARCHAR(max)
)
go
Create table APP_Email_Info(
Email_Id Int Primary Key
,Enail_Subject NVarchar(255)
,Email_Body Nvarchar(MAX)
,Email_Receiver Nvarchar(255)
,Email_Status Varchar(20)
,Sent_Date Datetime
,Request_By NVarchar(100)
)
Go
Create table CS_Post_Info(
Post_Id Int Primary Key
,Post_Title Nvarchar(255)
,Post_Content Nvarchar(Max)
,Meta_Desc Nvarchar(255)
,Meta_Key Nvarchar(255)
,[Enable] bit default 1
,Item_Id int
,Create_By int
,Create_Date Datetime
,Update_By int
,Update_Date Datetime
,[Language] Varchar(2)
)
go
Create table CS_ChatBox_Info(
Chat_Id Int primary Key
,Request_Name NVarchar(100)
,Request_Phonr Varchar(30)
,Request_Content Nvarchar(255)
,Unread bit default 1
)
go
Create table CS_Post_Slides(
Post_Id INT
,Tbl_Id INT PRIMARY KEY
,Image_Title Nvarchar(255)
,Image_Url Varchar(255)
,Image_Link Varchar(255)
,Image_Order int
,[Enable] bit default 1
,[Language] Varchar(2)
)
go
Create table CS_Other_Slide(
Image_Title NVarchar(255)
,Tbl_Id INT PRIMARY KEY
,Image_Url Varchar(255)
,Image_Link Varchar(255)
,Image_Order int
,[Enable] bit default 1
,Slide_Type VARCHAR(20)
,[Language] Varchar(2)
)