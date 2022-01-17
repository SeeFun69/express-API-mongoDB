module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
          description: String,
        },
        { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    
    const Comment = mongoose.model("comments", schema);
    return Comment;
  };