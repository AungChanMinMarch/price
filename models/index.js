exports.changesTracker = schema => {
    schema.add({ _changes: [{ _id: false, type: Object}] });
    schema.post('init', function(doc){
        this.$locals.initialState = new doc.constructor(doc);
    });

    schema.pre('save', function(next){
        if (this.isNew) { return next(); };
        let changeObj = {};
        for (const path of this.directModifiedPaths()) {
            changeObj[path] = this.$locals.initialState.get(path);
        }
        this._changes.push(changeObj);
        console.log(changeObj);
        next();
    });

    schema.post('save', function() {
        this.$locals.initialState = new this.constructor(this);
    });
}; 