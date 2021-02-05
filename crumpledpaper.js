class crumpledpaper
{
    constructor(x,y)
    {
        var options = {isStatic : false, restitution : 0.3, friction : 0.5, density : 5.1}
        this.body = Matter.Bodies.circle(x, y, 15, options);
        this.radius = 25;

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0, 0, this.radius);
        pop();
    }
}