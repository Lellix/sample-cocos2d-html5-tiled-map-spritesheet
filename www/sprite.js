var sprite = cc.Sprite.extend({
    actions: null,
    movable: false,
    ctor: function() {
        this._super();
        this.initWithFile('asset/tiles/sprite1.png');
        return this;
    },
    openOptions: function() {
        cc.log('open Options');
    },
    crouch: function() {
        cc.log('crouch');
    },
    prone: function() {
        cc.log('prone');
    },
    cover: function() {
        cc.log('cover');
    },
    move: function(point) {
        var p = cc.pAdd(point, cc.p(0, 56));
        cc.log(cc.pDistance(this.getPosition(), p));
        var moveToP = cc.MoveTo.create((cc.pDistance(this.getPosition(), p) / 200), p);
        this.runAction(moveToP);

    }
});