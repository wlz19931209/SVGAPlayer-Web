/*-----------------------------------------------------------------------------------------------------
 *  YYUED Open Source. 
 *  Licensed under the Apache2.0 License. See License.txt in the project root for license information.
 *----------------------------------------------------------------------------------------------------*/

"use strict";

import { BezierPath } from './bezierPath'

export class EllipsePath extends BezierPath {

    _x;
    _y;
    _radiusX;
    _radiusY;
    _transform;
    _styles;

    constructor(x, y, radiusX, radiusY, transform, styles) {
        super();
        this._x = x;
        this._y = y;
        this._radiusX = radiusX;
        this._radiusY = radiusY;
        this._transform = transform;
        this._styles = styles;
    }

}