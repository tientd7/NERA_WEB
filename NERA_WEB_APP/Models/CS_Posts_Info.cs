using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Models
{
    public class CS_Post_Info
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
         public int Post_Id { get; set; }
        public string Post_Title { get; set; }

        [AllowHtml]
        public string Post_Content { get; set; }
        public string Meta_Desc { get; set; }
        public string Meta_Key { get; set; }
        public bool Enable { get; set; }
        public int Item_ID { get; set; }
        public int? Create_By { get; set; }
        public DateTime? Create_Date { get; set; }
        public int? Update_By { get; set; }
        public DateTime? Update_Date { get; set; }
        public string Language { get; set; }     
        public Int32 Gia { get; set; }
        public bool Dathue { get; set; }



         
    }
    public class PostDetailViewModel
    {
        public PostDetailViewModel()
        {
            Slides = new List<CS_Post_Slides>();
        }
        public PostDetailViewModel(CS_Post_Info post, List<CS_Post_Slides> slides)
        {
            Slides = slides;
            this.Post_Id = post.Post_Id;
            this.Post_Title = post.Post_Title;
            this.Post_Content = post.Post_Content;
            this.Meta_Desc = post.Meta_Desc;
            this.Meta_Key = post.Meta_Key;
            this.Enable = post.Enable;
            this.Item_ID = post.Item_ID;
            this.Create_By = post.Create_By;
            this.Create_Date = post.Create_Date;
            this.Update_By = post.Update_By;
            this.Update_Date = post.Update_Date;
            this.Language = post.Language;
        }
        public int Post_Id { set; get; }
        public string Post_Title { get; set; }

        [AllowHtml]
        public string Post_Content { get; set; }
        public string Meta_Desc { get; set; }
        public string Meta_Key { get; set; }
        public bool Enable { get; set; }
        public int Item_ID { get; set; }
        public int? Create_By { get; set; }
        public DateTime? Create_Date { get; set; }
        public int? Update_By { get; set; }
        public DateTime? Update_Date { get; set; }
        public string Language { get; set; }
        public List<CS_Post_Slides> Slides { set; get; }
        public virtual Cs_Menu_item Cs_Menu_Item { get; set; }
    }
}