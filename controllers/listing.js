const Listing=require("../models/listing");

module.exports.index=async (req,res)=>{
  let allListings=await Listing.find({});
  res.render("index.ejs",{allListings});

};


module.exports.renderNewForm=(req,res)=>{
  res.render("new.ejs");
};

module.exports.ShowListing=async (req,res)=>{
      let {id}=req.params;
       const listing=await Listing.findById(id).populate({path:"reviews",populate:{
        path:"author",
       },
      }).populate("owner");
      if(!listing){
        req.flash("error" ,"Listing you requested for does not exist!");
        res.redirect("/listings");
      }
     console.log(listing);
      res.render("show.ejs",{listing});
    };


    module.exports.createListing=async (req,res,next)=>{
      const newListing=new Listing(req.body.listing); 
      newListing.owner=req.user._id;
      
      // Only set custom image if file was uploaded
      if(req.file){
        const url = req.file.path || req.file.secure_url || req.file.url;
        const filename = req.file.filename || req.file.public_id;
        if(url){
          newListing.image={url,filename};
        }
      }
      
      await newListing.save();
      req.flash("success" ,"New Listing Created!");
      res.redirect("/listings"); 
    };

    module.exports.renderEditForm=async (req,res )=>{
          let {id}=req.params;
          const listing=await Listing.findById(id);
           if(!listing){
            req.flash("error" ,"Listing you requested for does not exist!");
            res.redirect("/listings");
          }
         let originalImageUrl= listing.image.url;
         originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");

          res.render("edit.ejs",{listing,originalImageUrl});
    
    };

        module.exports.updateListing=async (req,res)=>{ 
         let {id}=req.params;
         let listing= await Listing.findByIdAndUpdate(id,{...req.body.listing});
         if(typeof req.file !=="undefined"){
         const url = req.file.path || req.file.secure_url || req.file.url;
       const filename = req.file.filename || req.file.public_id;
       if(url){
       listing.image={url,filename};
       }
      await listing.save();
         }
          req.flash("success" ,"Listing Updated!");
          res.redirect(`/listings/${id}`);
    
    
    };

    module.exports.destroyListing=async(req,res)=>{
   let {id}=req.params;
   let deleteListing=await Listing.findByIdAndDelete(id);
   console.log(deleteListing);
   req.flash("success" ,"Listing Delete!");
   res.redirect("/listings");

    };
