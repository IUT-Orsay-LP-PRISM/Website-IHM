class StrokeList {
    constructor() {
        this.stroke_list = [[]];
        this.currentColor = "black";
        this.index = 0;
    }

    changeColor(color) {
        this.currentColor = color
    }

    add_pt(pt) {
        this.stroke_list.at(-1).push({ point: pt, color: this.currentColor })
    }

    clear() {
        this.stroke_list = [[]];
    }

    erase(erase_pos, radius) {
        this.filter((index, pt) => (Point.distance(erase_pos, pt.point) > radius))
    }

    new_stroke() {
        if (!this.stroke_list.length || this.stroke_list.at(-1).length) {
            this.stroke_list.push([]);
        }
    }

    draw(context) {
        context.lineJoin = "round";
        context.lineWidth = 5;

        let i = 0;
        for (const stroke of this.stroke_list) {
            i++;
            if (stroke.length) {
                context.beginPath();
                context.moveTo(stroke[0].point.x, stroke[0].point.y);
                context.strokeStyle = stroke[0].color;

                for (const obj of stroke.slice(1)) {

                    context.lineTo(obj.point.x, obj.point.y);
                }
                context.stroke();
            }
        }
    }

    filter(criterion) {
        let old_stroke_list = this.stroke_list.slice();
        this.stroke_list = [[]];
        const n = old_stroke_list.length;
        let count = 0;

        for (let k = 0; k < n; k++) {
            let n_k = old_stroke_list[k].length;
            for (let i = 0; i < n_k; i++) {
                if (criterion(count, old_stroke_list[k][i])) {
                    const { point, color } = old_stroke_list[k][i];
                    this.stroke_list.at(-1).push({ point, color });
                } else {
                    this.new_stroke();
                }
                count++;
            }
            this.new_stroke();
        }
        this.new_stroke();
    }
}