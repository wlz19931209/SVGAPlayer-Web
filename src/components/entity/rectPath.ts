/*-----------------------------------------------------------------------------------------------------
 *  YYUED Open Source. 
 *  Licensed under the Apache2.0 License. See License.txt in the project root for license information.
 *----------------------------------------------------------------------------------------------------*/

"use strict";

import { BezierPath } from './bezierPath'

export class RectPath extends BezierPath {

    _x;
    _y;
    _width;
    _height;
    _cornerRadius;
    _transform;
    _styles;

    constructor(x, y, width, height, cornerRadius, transform, styles) {
        super();
        this._x = x
        this._y = y
        this._width = width
        this._height = height
        this._cornerRadius = cornerRadius
        this._transform = transform
        this._styles = styles
    }

}