declare namespace echarts {
    namespace EChartOption {
        /**
         * Scatter (bubble) chart . The scatter chart in
         * [rectangular coordinate](https://echarts.apache.org/en/option.html#grid)
         * could be used to present the relation between `x` and `y`.
         * If data have multiple dimensions, the values of the other dimensions
         * can be visualized through
         * [symbol](https://echarts.apache.org/en/option.html#series-scatter.symbol)
         * with various sizes and colors, which becomes a bubble chart.
         * These can be done by using with
         * [visualMap](https://echarts.apache.org/en/option.html#visualMap)
         * component.
         *
         * It could be used with
         * [rectangular coordinate](https://echarts.apache.org/en/option.html#grid)
         * and
         * [polar coordinate](https://echarts.apache.org/en/option.html#polar)
         * and
         * [geographical coordinate](https://echarts.apache.org/en/option.html#geo)
         * .
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-scatter)
         *
         * @see https://echarts.apache.org/en/option.html#series-scatter
         */
        interface SeriesScatter {
            /**
             * @default
             * "scatter"
             * @see https://echarts.apache.org/en/option.html#series-scatter.type
             */
            type?: string | undefined;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.id
             */
            id?: string | undefined;

            /**
             * Series name used for displaying in
             * [tooltip](https://echarts.apache.org/en/option.html#tooltip)
             * and filtering with
             * [legend](https://echarts.apache.org/en/option.html#legend)
             * , or updaing data and configuration with `setOption`.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.name
             */
            name?: string | undefined;

            /**
             * The coordinate used in the series, whose options are:
             *
             * + `'cartesian2d'`
             *
             * Use a two-dimensional rectangular coordinate (also known as Cartesian
             * coordinate), with
             * [xAxisIndex](https://echarts.apache.org/en/option.html#series-bar.xAxisIndex)
             * and
             * [yAxisIndex](https://echarts.apache.org/en/option.html#series-bar.yAxisIndex)
             * to assign the corresponding axis component.
             *
             * + `'polar'`
             *
             * Use polar coordinates, with
             * [polarIndex](https://echarts.apache.org/en/option.html#series-bar.polarIndex)
             * to assign the corresponding polar coordinate component.
             *
             * + `'geo'`
             *
             * Use geographic coordinate, with
             * [geoIndex](https://echarts.apache.org/en/option.html#series-bar.geoIndex)
             * to assign the corresponding geographic coordinate components.
             *
             * @default
             * "cartesian2d"
             * @see https://echarts.apache.org/en/option.html#series-scatter.coordinateSystem
             */
            coordinateSystem?: string | undefined;

            /**
             * Index of
             * [x axis](https://echarts.apache.org/en/option.html#xAxis)
             * to combine with, which is useful for multiple x axes in one chart.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.xAxisIndex
             */
            xAxisIndex?: number | undefined;

            /**
             * Index of
             * [y axis](https://echarts.apache.org/en/option.html#yAxis)
             * to combine with, which is useful for multiple y axes in one chart.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.yAxisIndex
             */
            yAxisIndex?: number | undefined;

            /**
             * Index of
             * [polar coordinate](https://echarts.apache.org/en/option.html#polar)
             * to combine with, which is useful for multiple polar axes in one
             * chart.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.polarIndex
             */
            polarIndex?: number | undefined;

            /**
             * Index of
             * [geographic coordinate](https://echarts.apache.org/en/option.html#geo)
             * to combine with, which is useful for multiple geographic axes
             * in one chart.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.geoIndex
             */
            geoIndex?: number | undefined;

            /**
             * Index of
             * [calendar coordinates](https://echarts.apache.org/en/option.html#calendar)
             * to combine with, which is useful for multiple calendar coordinates
             * in one chart.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.calendarIndex
             */
            calendarIndex?: number | undefined;

            /**
             * Whether to enable the animation effect when mouse is on the symbol.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.hoverAnimation
             */
            hoverAnimation?: boolean | undefined;

            /**
             * Whether to enable highlighting chart when
             * [legend](https://echarts.apache.org/en/option.html#legend)
             * is being hovered.
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-scatter.legendHoverLink
             */
            legendHoverLink?: boolean | undefined;

            /**
             * Symbol of .
             *
             * Icon types provided by ECharts includes `'circle'`, `'rect'`,
             * `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`,
             * `'none'`
             *
             * It can be set to an image with `'image://url'` , in which URL
             * is the link to an image, or `dataURI` of an image.
             *
             * An image URL example:
             *
             * ```
             * 'image://http://xxx.xxx.xxx/a/b.png'
             *
             * ```
             *
             * A `dataURI` example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * Icons can be set to arbitrary vector path via `'path://'` in
             * ECharts.
             * As compared with raster image, vector paths prevent from jagging
             * and blurring when scaled, and have a better control over changing
             * colors.
             * Size of vectoer icon will be adapted automatically. Refer to
             * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
             * for more information about format of path.
             * You may export vector paths from tools like Adobe Illustrator.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * @default
             * "circle"
             * @see https://echarts.apache.org/en/option.html#series-scatter.symbol
             */
            symbol?: string | undefined;

            /**
             * symbol size.
             * It can be set to single numbers like `10`, or use an array to
             * represent width and height.
             * For example, `[20, 10]` means symbol width is `20`, and height
             * is`10`.
             *
             * If size of symbols needs to be different, you can set with callback
             * function in the following format:
             *
             * ```
             * (value: Array|number, params: Object) => number|Array
             *
             * ```
             *
             * The first parameter `value` is the value in
             * [data](https://echarts.apache.org/en/option.html#series-scatter.data)
             * , and the second parameter `params` is the rest parameters of
             * data item.
             *
             * @default
             * 10
             * @see https://echarts.apache.org/en/option.html#series-scatter.symbolSize
             */
            symbolSize?: any[] | Function | number | undefined;

            /**
             * Rotate degree of symbol.
             * Note that when `symbol` is set to be `'arrow'` in `markLine`,
             * `symbolRotate` value will be ignored, and compulsively use tangent
             * angle.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.symbolRotate
             */
            symbolRotate?: number | undefined;

            /**
             * Whether to keep aspect for symbols in the form of `path://`.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.symbolKeepAspect
             */
            symbolKeepAspect?: boolean | undefined;

            /**
             * Offset of symbol relative to original position.
             * By default, symbol will be put in the center position of data.
             * But if symbol is from user-defined vector path or image, you
             * may not expect symbol to be in center.
             * In this case, you may use this attribute to set offset to default
             * position.
             * It can be in absolute pixel value, or in relative percentage
             * value.
             *
             * For example, `[0, '50%']` means to move upside side position
             * of symbol height.
             * It can be used to make the arrow in the bottom to be at data
             * position when symbol is pin.
             *
             * @default
             * [0, 0]
             * @see https://echarts.apache.org/en/option.html#series-scatter.symbolOffset
             */
            symbolOffset?: any[] | undefined;

            /**
             * Whether to enable the optimization of large-scale data.
             * It could be set when large data causes performance problem.
             *
             * After being enabled, `largeThreshold` can be used to indicate
             * the minimum number for turning on the optimization.
             *
             * But when the optimization enabled, the style of single data item
             * can't be customized any more.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.large
             */
            large?: boolean | undefined;

            /**
             * The threshold enabling the drawing optimization.
             *
             * @default
             * 2000
             * @see https://echarts.apache.org/en/option.html#series-scatter.largeThreshold
             */
            largeThreshold?: number | undefined;

            /**
             * The mouse style when mouse hovers on an element, the same as
             * `cursor` property in `CSS`.
             *
             * @default
             * "pointer"
             * @see https://echarts.apache.org/en/option.html#series-scatter.cursor
             */
            cursor?: string | undefined;

            /**
             * Text label of , to explain some data information about graphic
             * item like value, name and so on.
             * `label` is placed under `itemStyle` in ECharts 2.x.
             * In ECharts 3, to make the configuration structure flatter, `label`is
             * taken to be at the same level with `itemStyle`, and has `emphasis`
             * as `itemStyle` does.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.label
             */
            label?: {
                /**
                 * Whether to show label.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.show
                 */
                show?: boolean | undefined;

                /**
                 * Label position.
                 *
                 * **Followings are the options:**
                 *
                 * + \[x, y\]
                 *
                 * Use relative percentage, or absolute pixel values to represent
                 * position of label relative to top-left corner of bounding
                 * box. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label)
                 *
                 * + 'top'
                 *
                 * + 'left'
                 * + 'right'
                 * + 'bottom'
                 * + 'inside'
                 * + 'insideLeft'
                 * + 'insideRight'
                 * + 'insideTop'
                 * + 'insideBottom'
                 * + 'insideTopLeft'
                 * + 'insideBottomLeft'
                 * + 'insideTopRight'
                 * + 'insideBottomRight'
                 *
                 * See:
                 * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                 * .
                 *
                 * @default
                 * "inside"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.position
                 */
                position?: any[] | string | undefined;

                /**
                 * Distance to the host graphic element.
                 * Works when position is string value (like `'top'`、`'insideRight'`).
                 *
                 * See:
                 * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                 * .
                 *
                 * @default
                 * 5
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.distance
                 */
                distance?: number | undefined;

                /**
                 * Rotate label, from -90 degree to 90, positive value represents
                 * rotate anti-clockwise.
                 *
                 * See:
                 * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                 * .
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.rotate
                 */
                rotate?: number | undefined;

                /**
                 * Whether to move text slightly.
                 * For example: `[30, 40]` means move `30` horizontally and
                 * move `40` vertically.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.offset
                 */
                offset?: any[] | undefined;

                /**
                 * Data label formatter, which supports string template and
                 * callback function.
                 * In either form, `\n` is supported to represent a new line.
                 *
                 * **String template**
                 *
                 * Model variation includes:
                 *
                 * + `{a}`: series name.
                 * + `{b}`: the name of a data item.
                 * + `{c}`: the value of a data item.
                 * + `{@xxx}: the value of a dimension named`'xxx'`, for example,`{@product}`refers
                 * the value of`'product'\` dimension。
                 * + `{@[n]}: the value of a dimension at the index of`n`, for
                 * example,`{@\[3\]}\` refers the value at dimensions\[3\].
                 *
                 * **example:**
                 *
                 * ```
                 * formatter: '{b}: {@score}'
                 *
                 * ```
                 *
                 * **Callback function**
                 *
                 * Callback function is in form of:
                 *
                 * ```
                 * (params: Object|Array) => string
                 *
                 * ```
                 *
                 * where `params` is the single dataset needed by formatter,
                 * which is formed as:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.formatter
                 */
                formatter?: Function | string | undefined;

                /**
                 * text color.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 * @default
                 * ""#fff""
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.color
                 */
                color?: string | undefined;

                /**
                 * font style
                 *
                 * Options are:
                 *
                 * + `'normal'`
                 * + `'italic'`
                 * + `'oblique'`
                 *
                 * @default
                 * "normal"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.fontStyle
                 */
                fontStyle?: string | undefined;

                /**
                 * font thick weight
                 *
                 * Options are:
                 *
                 * + `'normal'`
                 * + `'bold'`
                 * + `'bolder'`
                 * + `'lighter'`
                 * + 100 | 200 | 300 | 400...
                 *
                 * @default
                 * "normal"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.fontWeight
                 */
                fontWeight?: string | number | undefined;

                /**
                 * font family
                 *
                 * Can also be 'serif' , 'monospace', ...
                 *
                 * @default
                 * "sans-serif"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.fontFamily
                 */
                fontFamily?: string | undefined;

                /**
                 * font size
                 *
                 * @default
                 * 12
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.fontSize
                 */
                fontSize?: number | undefined;

                /**
                 * Horizontal alignment of text, automatic by default.
                 *
                 * Options are:
                 *
                 * + `'left'`
                 * + `'center'`
                 * + `'right'`
                 *
                 * If `align` is not set in `rich`, `align` in parent level
                 * will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.align
                 */
                align?: string | undefined;

                /**
                 * Vertical alignment of text, automatic by default.
                 *
                 * Options are:
                 *
                 * + `'top'`
                 * + `'middle'`
                 * + `'bottom'`
                 *
                 * If `verticalAlign` is not set in `rich`, `verticalAlign`
                 * in parent level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.verticalAlign
                 */
                verticalAlign?: string | undefined;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.lineHeight
                 */
                lineHeight?: number | undefined;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label)
                 *
                 * `width` or `height` can be specified when using background
                 * image, or auto adapted by default.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.backgroundColor
                 */
                backgroundColor?: object | string | undefined;

                /**
                 * Border color of the text fregment.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * Border width of the text fregment.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border radius of the text fregment.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.borderRadius
                 */
                borderRadius?: number | undefined;

                /**
                 * Padding of the text fregment, for example:
                 *
                 * + `padding: [3, 4, 5, 6]`: represents padding of `[top, right,
                 * bottom, left]`.
                 * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                 * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.padding
                 */
                padding?: any[] | number | undefined;

                /**
                 * Shadow color of the text block.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.shadowColor
                 */
                shadowColor?: string | undefined;

                /**
                 * Show blur of the text block.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text block.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text block.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

                /**
                 * Width of the text block.
                 * It is the width of the text by default.
                 * In most cases, there is no need to specify it.
                 * You may want to use it in some cases like make simple table
                 * or using background image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * `width` can also be percent string, like `'100%'`, which
                 * represents the percent of `contentWidth` (that is, the width
                 * without `padding`) of its container box.
                 * It is based on `contentWidth` because that each text fregment
                 * is layout based on the `content box`, where it makes no sense
                 * that calculating width based on `outerWith` in prectice.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.width
                 */
                width?: number | string | undefined;

                /**
                 * Height of the text block.
                 * It is the width of the text by default.
                 * You may want to use it in some cases like using background
                 * image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.height
                 */
                height?: number | string | undefined;

                /**
                 * Storke color of the text.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor
                 */
                textBorderColor?: string | undefined;

                /**
                 * Storke line width of the text.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.textBorderWidth
                 */
                textBorderWidth?: number | undefined;

                /**
                 * Shadow color of the text itself.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.textShadowColor
                 */
                textShadowColor?: string | undefined;

                /**
                 * Shadow blue of the text itself.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.textShadowBlur
                 */
                textShadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text itself.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.textShadowOffsetX
                 */
                textShadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.textShadowOffsetY
                 */
                textShadowOffsetY?: number | undefined;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich
                 */
                rich?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E
                     */
                    [userStyle: string]: {
                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.color
                         */
                        color?: string | undefined;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                         */
                        fontStyle?: string | undefined;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                         */
                        fontSize?: number | undefined;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.align
                         */
                        align?: string | undefined;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                         */
                        borderRadius?: number | undefined;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.width
                         */
                        width?: number | string | undefined;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;
                    };
                } | undefined;
            } | undefined;

            /**
             * Graphic style of , `emphasis` is the style when it is highlighted,
             * like being hovered by mouse, or highlighted via legend connect.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.itemStyle
             */
            itemStyle?: {
                /**
                 * color. Color is taken from
                 * [option.color Palette](https://echarts.apache.org/en/option.html#color)
                 * by default.
                 *
                 * > Color can be represented in RGB, for example `'rgb(128,
                 * 128, 128)'`.
                 * RGBA can be used when you need alpha channel, for example
                 * `'rgba(128, 128, 128, 0.5)'`.
                 * You may also use hexadecimal format, for example `'#ccc'`.
                 * Gradient color and texture are also supported besides single
                 * colors.
                 * >
                 * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.itemStyle)
                 *
                 * Supports callback functions, in the form of:
                 *
                 * ```
                 * (params: Object) => Color
                 *
                 * ```
                 *
                 * Input parameters are `seriesIndex`, `dataIndex`, `data`,
                 * `value`, and etc. of data item.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.itemStyle.color
                 */
                color?: EChartOption.Color | Function | undefined;

                /**
                 * border color, whose format is similar to that of `color`.
                 *
                 * @default
                 * "#000"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.itemStyle.borderColor
                 */
                borderColor?: EChartOption.Color | undefined;

                /**
                 * border width. No border when it is set to be 0.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.itemStyle.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                 * `'solid'` by default.
                 *
                 * @default
                 * "solid"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.itemStyle.borderType
                 */
                borderType?: string | undefined;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.itemStyle)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.itemStyle.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.itemStyle.shadowColor
                 */
                shadowColor?: EChartOption.Color | undefined;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.itemStyle.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.itemStyle.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.itemStyle.opacity
                 */
                opacity?: number | undefined;
            } | undefined;

            /**
             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis
             */
            emphasis?: {
                /**
                 * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.show
                     */
                    show?: boolean | undefined;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                     * .
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.position
                     */
                    position?: any[] | string | undefined;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                     * .
                     *
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                     * .
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.offset
                     */
                    offset?: any[] | undefined;

                    /**
                     * Data label formatter, which supports string template
                     * and callback function.
                     * In either form, `\n` is supported to represent a new
                     * line.
                     *
                     * **String template**
                     *
                     * Model variation includes:
                     *
                     * + `{a}`: series name.
                     * + `{b}`: the name of a data item.
                     * + `{c}`: the value of a data item.
                     * + `{@xxx}: the value of a dimension named`'xxx'`, for
                     * example,`{@product}`refers the value of`'product'\` dimension。
                     * + `{@[n]}: the value of a dimension at the index of`n`,
                     * for example,`{@\[3\]}\` refers the value at dimensions\[3\].
                     *
                     * **example:**
                     *
                     * ```
                     * formatter: '{b}: {@score}'
                     *
                     * ```
                     *
                     * **Callback function**
                     *
                     * Callback function is in form of:
                     *
                     * ```
                     * (params: Object|Array) => string
                     *
                     * ```
                     *
                     * where `params` is the single dataset needed by formatter,
                     * which is formed as:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.formatter
                     */
                    formatter?: Function | string | undefined;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.color
                     */
                    color?: string | undefined;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.fontStyle
                     */
                    fontStyle?: string | undefined;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.fontSize
                     */
                    fontSize?: number | undefined;

                    /**
                     * Horizontal alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'left'`
                     * + `'center'`
                     * + `'right'`
                     *
                     * If `align` is not set in `rich`, `align` in parent level
                     * will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.align
                     */
                    align?: string | undefined;

                    /**
                     * Vertical alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'top'`
                     * + `'middle'`
                     * + `'bottom'`
                     *
                     * If `verticalAlign` is not set in `rich`, `verticalAlign`
                     * in parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.borderRadius
                     */
                    borderRadius?: number | undefined;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.width
                     */
                    width?: number | string | undefined;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string | undefined;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string | undefined;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number | undefined;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string | undefined;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number | undefined;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string | undefined;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.emphasis.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.emphasis.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;
            } | undefined;

            /**
             * `progressive` specifies the amount of graphic elements that can
             * be rendered within a frame (about 16ms) if "progressive rendering"
             * enabled.
             *
             * When data amount is from thousand to more than 10 million, it
             * will take too long time to render all of the graphic elements.
             * Since ECharts 4, "progressive rendering" is supported in its
             * workflow, which processes and renders data chunk by chunk alone
             * with each frame, avoiding to block the UI thread of the browser.
             *
             * @default
             * 400
             * @see https://echarts.apache.org/en/option.html#series-scatter.progressive
             */
            progressive?: number | undefined;

            /**
             * If current data amount is over the threshold, "progressive rendering"
             * is enabled.
             *
             * @default
             * 3000
             * @see https://echarts.apache.org/en/option.html#series-scatter.progressiveThreshold
             */
            progressiveThreshold?: number | undefined;

            /**
             * `dimensions` can be used to define dimension info for `series.data`
             * or `dataset.source`.
             *
             * Notice: if
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * is used, we can provide dimension names in the first column/row
             * of
             * [dataset.source](https://echarts.apache.org/en/option.html#dataset.source)
             * , and not need to specify `dimensions` here.
             * But if `dimensions` is specified here, echarts will not retrieve
             * dimension names from the first row/column of `dataset.source`
             * any more.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * Each data item of `dimensions` can be:
             *
             * + `string`, for example, `'someName'`, which equals to `{name:
             * 'someName'}`.
             * + `Object`, where the attributes can be:
             * + name: `string`.
             * + type: `string`, supports:
             * + `number`
             * + `float`, that is,
             * [Float64Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
             *
             * + `int`, that is,
             * [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
             *
             * + `ordinal`, discrete value, which represents string generally.
             * + `time`, time value, see
             * [data](https://echarts.apache.org/en/option.html#series.data)
             * to check the format of time value.
             * + displayName: `string`, generally used in tooltip for dimension
             * display. If not specified, use `name` by default.
             *
             * When `dimensions` is specified, the default `tooltip` will be
             * displayed vertically, which is better to show diemsion names.
             * Otherwise, `tooltip` will displayed only value horizontally.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.dimensions
             */
            dimensions?: any[] | undefined;

            /**
             * Define what is encoded to for each dimension of `data`.
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * Attributes of encode are different according to the type of coordinate
             * systtems. For
             * [cartesian2d](https://echarts.apache.org/en/option.html#grid)
             * , `x` and `y` can be defined. For
             * [polar](https://echarts.apache.org/en/option.html#polar)
             * , `radius` and `angle` can be defined. For
             * [geo](https://echarts.apache.org/en/option.html#geo)
             * , `lng` and `lat` can be defined.
             * Attribute `tooltip` and `itemName` (data item name in tooltip)
             * are always able to be defined.
             *
             * When
             * [dimensions](https://echarts.apache.org/en/option.html#series.dimensions)
             * is used to defined name for a certain dimension, `encode` can
             * refer the name directly. For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * Specially, in \[custom series(~series-custom), some property
             * in `encode`, corresponding to axis, can be set as null to make
             * the series not controlled by the axis, that is, the series data
             * will not be count in the extent of the axis, and the
             * [dataZoom](https://echarts.apache.org/en/option.html#dataZoom)
             * on the axis will not filter the series.
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.encode
             */
            encode?: object | undefined;

            /**
             * When
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * is used, `seriesLayoutBy` specifies whether the column or the
             * row of `dataset` is mapped to the series, namely, the series
             * is "layout" on columns or rows. Optional values:
             *
             * + 'column': by default, the columns of `dataset` are mapped the
             * series. In this case, each column represents a dimension.
             * + 'row'：the rows of `dataset` are mapped to the series.
             * In this case, each row represents a dimension.
             *
             * Check this
             * [example](https://echarts.apache.org/examples/en/editor.html?c=dataset-series-layout-by)
             * .
             *
             * @default
             * "column"
             * @see https://echarts.apache.org/en/option.html#series-scatter.seriesLayoutBy
             */
            seriesLayoutBy?: string | undefined;

            /**
             * If
             * [series.data](https://echarts.apache.org/en/option.html#series.data)
             * is not specified, and
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * exists, the series will use `dataset`.
             * `datasetIndex` specifies which dataset will be used.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.datasetIndex
             */
            datasetIndex?: number | undefined;

            /**
             * Data array of series, which can be in the following forms:
             *
             * Notice, if no `data` specified in series, and there is
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * in option, series will use the first
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * as its datasource. If `data` has been specified,
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * will not used.
             *
             * `series.datasetIndex` can be used to specify other
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * .
             *
             * Basically, data is represented by a two-dimension array, like
             * the example below, where each colum is named as a "dimension".
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * + In
             * [cartesian (grid)](https://echarts.apache.org/en/option.html#grid)
             * , "dimX" and "dimY" correspond to
             * [xAxis](https://echarts.apache.org/en/option.html#xAxis)
             * and
             * [yAxis](https://echarts.apache.org/en/option.html#yAxis)
             * repectively.
             * + In
             * [polar](https://echarts.apache.org/en/option.html#polar)
             * "dimX" and "dimY" correspond to
             * [radiusAxis](https://echarts.apache.org/en/option.html#radiusAxis)
             * 和
             * [angleAxis](https://echarts.apache.org/en/option.html#anbleAxis)
             * repectively.
             * + Other dimensions are optional, which can be used in other place.
             * For example:
             * + [visualMap](https://echarts.apache.org/en/option.html#visualMap)
             * can map one or more dimensions to viusal (color, symbol size
             * ...).
             * + [series.symbolSize](https://echarts.apache.org/en/option.html#series.symbolSize)
             * can be set as a callback function, where symbol size can be calculated
             * by values of a certain dimension.
             * + Values in other dimensions can be shown by
             * [tooltip.formatter](https://echarts.apache.org/en/option.html#tooltip.formatter)
             * or
             * [series.label.formatter](https://echarts.apache.org/en/option.html#series.label.formatter)
             * .
             *
             * Especially, when there is one and only one category axis (axis.type
             * is `'category'`), data can be simply be represented by a one-dimension
             * array, like:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * **Relationship between "value" and
             * [axis.type](https://echarts.apache.org/en/option.html#xAxis.type)
             * **
             *
             * + When a dimension corresponds to a value axis (axis.type
             * is `'value'` or `'log'`):
             *
             * The value can be a `number` (like `12`) (can also be a number
             * in a `string` format, like `'12'`).
             *
             * + When a dimension corresponds to a category axis (axis.type
             * is `'category'`):
             *
             * The value should be the ordinal of the axis.data
             * (based on `0`), the string value of the axis.data.
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * There is an example of double category axes:
             * [Github Punchcard](https://echarts.apache.org/examples/en/editor.html?c=scatter-punchCard)
             * .
             *
             * + When a dimension corresponds to a time axis (type is `'time'`),
             * the value can be:
             *
             * + a timestamp, like `1484141700832`, which represents a UTC time.
             * + a date string, in one of the formats below:
             * + a subset of
             * [ISO 8601](http://www.ecma-international.org/ecma-262/5.1/#se
             * c-15.9.1.15)
             * , only including (all of these are treated as local time unless
             * timezone is specified, which is consistent with
             * [moment](https://momentjs.com/)
             * ):
             * + only part of year/month/date/time are specified: `'2012-03'`,
             * `'2012-03-01'`, `'2012-03-01 05'`, `'2012-03-01 05:06'`.
             * + separated by `"T"` or a space: `'2012-03-01T12:22:33.123'`,
             * `'2012-03-01 12:22:33.123'`.
             * + timezone specified: `'2012-03-01T12:22:33Z'`, `'2012-03-01T12:22:33+8000'`,
             * `'2012-03-01T12:22:33-05:00'`.
             * + other date string format (all of these are treated as local
             * time): `'2012'`, `'2012-3-1'`, `'2012/3/1'`, `'2012/03/01'`,
             * `'2009/6/12 2:00'`, `'2009/6/12 2:05:08'`, `'2009/6/12 2:05:08.123'`.
             * + a JavaScript Date instance created by user:
             * + Caution, when using a data string to create a Date instance,
             * [browser differences and inconsistencies](http://dygraphs.com/date-formats.html)
             * should be considered.
             * + For example: In chrome, `new Date('2012-01-01')` is treated
             * as a Jan 1st 2012 in UTC, while `new Date('2012-1-1')` and `new
             * Date('2012/01/01')` are treated as Jan 1st 2012 in local timezone.
             * In safari `new Date('2012-1-1')` is not supported.
             * + So if you intent to perform `new Date(dateString)`, it is strongly
             * recommended to use a time parse library (e.g.,
             * [moment](https://momentjs.com/)
             * ), or use `echarts.number.parseDate`, or check
             * [this](http://dygraphs.com/date-formats.html)
             * .
             *
             * **Customize a data item:**
             *
             * When needing to customize a data item, it can be set as an object,
             * where property `value` reprensent real value. For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * **Empty value:**
             *
             * `'-'` or `null` or `undefined` or `NaN` can be used to describe
             * that a data item is not exists (ps：_not exist_ does not means
             * its value is `0`).
             *
             * For example, line chart can break when encounter an empty value,
             * and scatter chart do not display graphic elements for empty values.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.data
             */
            data?:
                | Array<void | number | string | SeriesScatter.DataObject>
                | Array<Array<void | number | string | SeriesScatter.DataObject>>
                | undefined;

            /**
             * Mark point in a chart.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint
             */
            markPoint?: {
                /**
                 * Symbol of .
                 *
                 * Icon types provided by ECharts includes `'circle'`, `'rect'`,
                 * `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`,
                 * `'none'`
                 *
                 * It can be set to an image with `'image://url'` , in which
                 * URL is the link to an image, or `dataURI` of an image.
                 *
                 * An image URL example:
                 *
                 * ```
                 * 'image://http://xxx.xxx.xxx/a/b.png'
                 *
                 * ```
                 *
                 * A `dataURI` example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint)
                 *
                 * Icons can be set to arbitrary vector path via `'path://'`
                 * in ECharts.
                 * As compared with raster image, vector paths prevent from
                 * jagging and blurring when scaled, and have a better control
                 * over changing colors.
                 * Size of vectoer icon will be adapted automatically.
                 * Refer to
                 * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                 * for more information about format of path.
                 * You may export vector paths from tools like Adobe Illustrator.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint)
                 *
                 * @default
                 * "pin"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.symbol
                 */
                symbol?: string | undefined;

                /**
                 * symbol size.
                 * It can be set to single numbers like `10`, or use an array
                 * to represent width and height.
                 * For example, `[20, 10]` means symbol width is `20`, and height
                 * is`10`.
                 *
                 * If size of symbols needs to be different, you can set with
                 * callback function in the following format:
                 *
                 * ```
                 * (value: Array|number, params: Object) => number|Array
                 *
                 * ```
                 *
                 * The first parameter `value` is the value in
                 * [data](https://echarts.apache.org/en/option.html#series-.data)
                 * , and the second parameter `params` is the rest parameters
                 * of data item.
                 *
                 * @default
                 * 50
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.symbolSize
                 */
                symbolSize?: any[] | Function | number | undefined;

                /**
                 * Rotate degree of symbol.
                 * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                 * `symbolRotate` value will be ignored, and compulsively use
                 * tangent angle.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.symbolRotate
                 */
                symbolRotate?: number | undefined;

                /**
                 * Whether to keep aspect for symbols in the form of `path://`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.symbolKeepAspect
                 */
                symbolKeepAspect?: boolean | undefined;

                /**
                 * Offset of symbol relative to original position.
                 * By default, symbol will be put in the center position of
                 * data.
                 * But if symbol is from user-defined vector path or image,
                 * you may not expect symbol to be in center.
                 * In this case, you may use this attribute to set offset to
                 * default position.
                 * It can be in absolute pixel value, or in relative percentage
                 * value.
                 *
                 * For example, `[0, '50%']` means to move upside side position
                 * of symbol height.
                 * It can be used to make the arrow in the bottom to be at data
                 * position when symbol is pin.
                 *
                 * @default
                 * [0, 0]
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.symbolOffset
                 */
                symbolOffset?: any[] | undefined;

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.silent
                 */
                silent?: boolean | undefined;

                /**
                 * Label of mark point.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.show
                     */
                    show?: boolean | undefined;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                     * .
                     *
                     * @default
                     * "inside"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.position
                     */
                    position?: any[] | string | undefined;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                     * .
                     *
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                     * .
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.offset
                     */
                    offset?: any[] | undefined;

                    /**
                     * Data label formatter, which supports string template
                     * and callback function.
                     * In either form, `\n` is supported to represent a new
                     * line.
                     *
                     * **String template**
                     *
                     * Model variation includes:
                     *
                     * + `{a}`: series name.
                     * + `{b}`: the name of a data item.
                     * + `{c}`: the value of a data item.
                     * + `{@xxx}: the value of a dimension named`'xxx'`, for
                     * example,`{@product}`refers the value of`'product'\` dimension。
                     * + `{@[n]}: the value of a dimension at the index of`n`,
                     * for example,`{@\[3\]}\` refers the value at dimensions\[3\].
                     *
                     * **example:**
                     *
                     * ```
                     * formatter: '{b}: {@score}'
                     *
                     * ```
                     *
                     * **Callback function**
                     *
                     * Callback function is in form of:
                     *
                     * ```
                     * (params: Object|Array) => string
                     *
                     * ```
                     *
                     * where `params` is the single dataset needed by formatter,
                     * which is formed as:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.formatter
                     */
                    formatter?: Function | string | undefined;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.color
                     */
                    color?: string | undefined;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.fontStyle
                     */
                    fontStyle?: string | undefined;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.fontSize
                     */
                    fontSize?: number | undefined;

                    /**
                     * Horizontal alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'left'`
                     * + `'center'`
                     * + `'right'`
                     *
                     * If `align` is not set in `rich`, `align` in parent level
                     * will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.align
                     */
                    align?: string | undefined;

                    /**
                     * Vertical alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'top'`
                     * + `'middle'`
                     * + `'bottom'`
                     *
                     * If `verticalAlign` is not set in `rich`, `verticalAlign`
                     * in parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.borderRadius
                     */
                    borderRadius?: number | undefined;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.width
                     */
                    width?: number | string | undefined;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string | undefined;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string | undefined;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number | undefined;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string | undefined;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number | undefined;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string | undefined;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show label.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.show
                         */
                        show?: boolean | undefined;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                         * .
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.position
                         */
                        position?: any[] | string | undefined;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                         * .
                         *
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                         * .
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.offset
                         */
                        offset?: any[] | undefined;

                        /**
                         * Data label formatter, which supports string template
                         * and callback function.
                         * In either form, `\n` is supported to represent a
                         * new line.
                         *
                         * **String template**
                         *
                         * Model variation includes:
                         *
                         * + `{a}`: series name.
                         * + `{b}`: the name of a data item.
                         * + `{c}`: the value of a data item.
                         * + `{@xxx}: the value of a dimension named`'xxx'`,
                         * for example,`{@product}`refers the value of`'product'\`
                         * dimension。
                         * + `{@[n]}: the value of a dimension at the index
                         * of`n`, for example,`{@\[3\]}\` refers the value at
                         * dimensions\[3\].
                         *
                         * **example:**
                         *
                         * ```
                         * formatter: '{b}: {@score}'
                         *
                         * ```
                         *
                         * **Callback function**
                         *
                         * Callback function is in form of:
                         *
                         * ```
                         * (params: Object|Array) => string
                         *
                         * ```
                         *
                         * where `params` is the single dataset needed by formatter,
                         * which is formed as:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.formatter
                         */
                        formatter?: Function | string | undefined;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.color
                         */
                        color?: string | undefined;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.fontStyle
                         */
                        fontStyle?: string | undefined;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.fontSize
                         */
                        fontSize?: number | undefined;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.align
                         */
                        align?: string | undefined;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.borderRadius
                         */
                        borderRadius?: number | undefined;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.width
                         */
                        width?: number | string | undefined;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string | undefined;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string | undefined;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number | undefined;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string | undefined;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number | undefined;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string | undefined;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Mark point style.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.opacity
                     */
                    opacity?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.emphasis
                     */
                    emphasis?: {
                        /**
                         * color.
                         *
                         * > Color can be represented in RGB, for example `'rgb(128,
                         * 128, 128)'`.
                         * RGBA can be used when you need alpha channel, for
                         * example `'rgba(128, 128, 128, 0.5)'`.
                         * You may also use hexadecimal format, for example
                         * `'#ccc'`.
                         * Gradient color and texture are also supported besides
                         * single colors.
                         * >
                         * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.itemStyle.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.emphasis.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.emphasis.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.emphasis.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.itemStyle.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.itemStyle.emphasis.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Data array for mark points, each of which is an object.
                 * Here are some ways to assign mark point position.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * 2. Assign coordinate position with
                 * [coord](https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.coord)
                 * attribute, in which `'min'`, `'max'`, `'average'` are supported
                 * for each dimension.
                 *
                 * 3. Use
                 * [type](https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.type)
                 * attribute to mark the maximum and minimum values in the series,
                 * in which
                 * [valueIndex](https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.valueIndex)
                 * or
                 * [valueDim](https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.valueDim)
                 * can be used to assign the dimension.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * **For example:**
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data
                 */
                data?: {
                    /**
                     * Mark point name.
                     *
                     * @default
                     * ''
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.name
                     */
                    name?: string | undefined;

                    /**
                     * Special label types, are used to label maximum value,
                     * minimum value and so on.
                     *
                     * **Options are:**
                     *
                     * + `'min'` maximum value.
                     * + `'max'` minimum value.
                     * + `'average'` average value.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.type
                     */
                    type?: string | undefined;

                    /**
                     * Available when using
                     * [type](https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.type)
                     * it is used to assign maximum value and minimum value
                     * in dimensions, it could be `0` (xAxis, radiusAxis), `1`
                     * (yAxis, angleAxis), and use the first value axis dimension
                     * by default.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.valueIndex
                     */
                    valueIndex?: number | undefined;

                    /**
                     * Works only when
                     * [type](https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.type)
                     * is assigned.
                     * It is used to state the dimension used to calculate maximum
                     * value or minimum value.
                     * It may be the direct name of a dimension, like `x`, or
                     * `angle` for line charts, or `open`, or `close` for candlestick
                     * charts.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.valueDim
                     */
                    valueDim?: string | undefined;

                    /**
                     * Coordinates of the starting point or ending point, whose
                     * format depends on the coordinate of the series.
                     * It can be `x`, and `y` for
                     * [rectangular coordinates](https://echarts.apache.org/en/option.html#grid)
                     * , or `radius`, and `angle` for
                     * [polar coordinates](https://echarts.apache.org/en/option.html#polar)
                     * .
                     *
                     * **Notice:** For axis with
                     * [axis.type](https://echarts.apache.org/en/option.html#xAixs.type)
                     * `'category'`:
                     *
                     * + If coord value is `number`, it represents index of
                     * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                     * .
                     * + If coord value is `string`, it represents concrete
                     * value in
                     * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                     *
                     * Please notice that in this case `xAxis.data`
                     * must not be written as \[number, number,
                     *
                     * \], but can only be written \[string, string,
                     *
                     * \].
                     * Otherwise it is not able to be located by markPoint /
                     * markLine.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.coord
                     */
                    coord?: any[] | undefined;

                    /**
                     * X position according to container, in pixel.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.x
                     */
                    x?: number | undefined;

                    /**
                     * Y position according to container, in pixel.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.y
                     */
                    y?: number | undefined;

                    /**
                     * Label value, which can be ignored.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.value
                     */
                    value?: number | undefined;

                    /**
                     * Symbol of .
                     *
                     * Icon types provided by ECharts includes `'circle'`, `'rect'`,
                     * `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`,
                     * `'none'`
                     *
                     * It can be set to an image with `'image://url'` , in which
                     * URL is the link to an image, or `dataURI` of an image.
                     *
                     * An image URL example:
                     *
                     * ```
                     * 'image://http://xxx.xxx.xxx/a/b.png'
                     *
                     * ```
                     *
                     * A `dataURI` example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data)
                     *
                     * Icons can be set to arbitrary vector path via `'path://'`
                     * in ECharts.
                     * As compared with raster image, vector paths prevent from
                     * jagging and blurring when scaled, and have a better control
                     * over changing colors.
                     * Size of vectoer icon will be adapted automatically.
                     * Refer to
                     * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                     * for more information about format of path.
                     * You may export vector paths from tools like Adobe Illustrator.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.symbol
                     */
                    symbol?: string | undefined;

                    /**
                     * symbol size.
                     * It can be set to single numbers like `10`, or use an
                     * array to represent width and height.
                     * For example, `[20, 10]` means symbol width is `20`, and
                     * height is`10`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.symbolSize
                     */
                    symbolSize?: any[] | number | undefined;

                    /**
                     * Rotate degree of symbol.
                     * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                     * `symbolRotate` value will be ignored, and compulsively
                     * use tangent angle.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.symbolRotate
                     */
                    symbolRotate?: number | undefined;

                    /**
                     * Whether to keep aspect for symbols in the form of `path://`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.symbolKeepAspect
                     */
                    symbolKeepAspect?: boolean | undefined;

                    /**
                     * Offset of symbol relative to original position.
                     * By default, symbol will be put in the center position
                     * of data.
                     * But if symbol is from user-defined vector path or image,
                     * you may not expect symbol to be in center.
                     * In this case, you may use this attribute to set offset
                     * to default position.
                     * It can be in absolute pixel value, or in relative percentage
                     * value.
                     *
                     * For example, `[0, '50%']` means to move upside side position
                     * of symbol height.
                     * It can be used to make the arrow in the bottom to be
                     * at data position when symbol is pin.
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.symbolOffset
                     */
                    symbolOffset?: any[] | undefined;

                    /**
                     * Mark point style.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * color.
                         *
                         * > Color can be represented in RGB, for example `'rgb(128,
                         * 128, 128)'`.
                         * RGBA can be used when you need alpha channel, for
                         * example `'rgba(128, 128, 128, 0.5)'`.
                         * You may also use hexadecimal format, for example
                         * `'#ccc'`.
                         * Gradient color and texture are also supported besides
                         * single colors.
                         * >
                         * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.itemStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.itemStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.opacity
                         */
                        opacity?: number | undefined;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.emphasis
                         */
                        emphasis?: {
                            /**
                             * color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.itemStyle.emphasis)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.emphasis.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.emphasis.borderColor
                             */
                            borderColor?: EChartOption.Color | undefined;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.emphasis.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.emphasis.borderType
                             */
                            borderType?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.itemStyle.emphasis)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.emphasis.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.emphasis.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.itemStyle.emphasis.opacity
                             */
                            opacity?: number | undefined;
                        } | undefined;
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label
                     */
                    label?: {
                        /**
                         * Whether to show label.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.show
                         */
                        show?: boolean | undefined;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                         * .
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.position
                         */
                        position?: any[] | string | undefined;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                         * .
                         *
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                         * .
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.offset
                         */
                        offset?: any[] | undefined;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.color
                         */
                        color?: string | undefined;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.fontStyle
                         */
                        fontStyle?: string | undefined;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.fontSize
                         */
                        fontSize?: number | undefined;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.align
                         */
                        align?: string | undefined;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.borderRadius
                         */
                        borderRadius?: number | undefined;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.width
                         */
                        width?: number | string | undefined;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string | undefined;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string | undefined;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number | undefined;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string | undefined;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number | undefined;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string | undefined;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis
                         */
                        emphasis?: {
                            /**
                             * Whether to show label.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.show
                             */
                            show?: boolean | undefined;

                            /**
                             * Label position.
                             *
                             * **Followings are the options:**
                             *
                             * + \[x, y\]
                             *
                             * Use relative percentage, or absolute pixel values
                             * to represent position of label relative to top-left
                             * corner of bounding box. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.emphasis)
                             *
                             * + 'top'
                             *
                             * + 'left'
                             * + 'right'
                             * + 'bottom'
                             * + 'inside'
                             * + 'insideLeft'
                             * + 'insideRight'
                             * + 'insideTop'
                             * + 'insideBottom'
                             * + 'insideTopLeft'
                             * + 'insideBottomLeft'
                             * + 'insideTopRight'
                             * + 'insideBottomRight'
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                             * .
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.position
                             */
                            position?: any[] | string | undefined;

                            /**
                             * Distance to the host graphic element.
                             * Works when position is string value (like `'top'`、`'insideRight'`).
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                             * .
                             *
                             * @default
                             * 5
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.distance
                             */
                            distance?: number | undefined;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                             * .
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rotate
                             */
                            rotate?: number | undefined;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.offset
                             */
                            offset?: any[] | undefined;

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.color
                             */
                            color?: string | undefined;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.fontStyle
                             */
                            fontStyle?: string | undefined;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.fontSize
                             */
                            fontSize?: number | undefined;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.emphasis)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.align
                             */
                            align?: string | undefined;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.emphasis)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.emphasis)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.emphasis)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.borderRadius
                             */
                            borderRadius?: number | undefined;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.width
                             */
                            width?: number | string | undefined;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.emphasis)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {
                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                     */
                                    color?: string | undefined;

                                    /**
                                     * font style
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'italic'`
                                     * + `'oblique'`
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                     */
                                    fontStyle?: string | undefined;

                                    /**
                                     * font thick weight
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'bold'`
                                     * + `'bolder'`
                                     * + `'lighter'`
                                     * + 100 | 200 | 300 | 400...
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number | undefined;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string | undefined;

                                    /**
                                     * font size
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number | undefined;

                                    /**
                                     * Horizontal alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'left'`
                                     * + `'center'`
                                     * + `'right'`
                                     *
                                     * If `align` is not set in `rich`, `align`
                                     * in parent level will be used.
                                     * For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string | undefined;

                                    /**
                                     * Vertical alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'top'`
                                     * + `'middle'`
                                     * + `'bottom'`
                                     *
                                     * If `verticalAlign` is not set in `rich`,
                                     * `verticalAlign` in parent level will
                                     * be used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string | undefined;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number | undefined;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string | undefined;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string | undefined;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number | undefined;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number | undefined;

                                    /**
                                     * Padding of the text fregment, for example:
                                     *
                                     * + `padding: [3, 4, 5, 6]`: represents
                                     * padding of `[top, right, bottom, left]`.
                                     * + `padding: 4`: represents `padding:
                                     * [4, 4, 4, 4]`.
                                     * + `padding: [3, 4]`: represents `padding:
                                     * [3, 4, 3, 4]`.
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number | undefined;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string | undefined;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number | undefined;

                                    /**
                                     * Width of the text block.
                                     * It is the width of the text by default.
                                     * In most cases, there is no need to specify
                                     * it.
                                     * You may want to use it in some cases
                                     * like make simple table or using background
                                     * image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * `width` can also be percent string, like
                                     * `'100%'`, which represents the percent
                                     * of `contentWidth` (that is, the width
                                     * without `padding`) of its container box.
                                     * It is based on `contentWidth` because
                                     * that each text fregment is layout based
                                     * on the `content box`, where it makes
                                     * no sense that calculating width based
                                     * on `outerWith` in prectice.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string | undefined;

                                    /**
                                     * Height of the text block.
                                     * It is the width of the text by default.
                                     * You may want to use it in some cases
                                     * like using background image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string | undefined;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string | undefined;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number | undefined;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string | undefined;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number | undefined;
                                };
                            } | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Whether to enable animation.
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.animation
                 */
                animation?: boolean | undefined;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.animationThreshold
                 */
                animationThreshold?: number | undefined;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint)
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.animationDuration
                 */
                animationDuration?: Function | number | undefined;

                /**
                 * Easing method used for the first animation.
                 * Varied easing effects can be found at
                 * [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing)
                 * .
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.animationEasing
                 */
                animationEasing?: string | undefined;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.animationDelay
                 */
                animationDelay?: Function | number | undefined;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint)
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number | undefined;

                /**
                 * Easing method used for animation.
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.animationEasingUpdate
                 */
                animationEasingUpdate?: string | undefined;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * prefix
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markPoint.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number | undefined;
            } | undefined;

            /**
             * Use a line in the chart to illustrate.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine
             */
            markLine?: {
                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.silent
                 */
                silent?: boolean | undefined;

                /**
                 * Symbol type at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 * See
                 * [data.symbol](https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.symbol)
                 * for more format information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.symbol
                 */
                symbol?: any[] | string | undefined;

                /**
                 * Symbol size at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 *
                 * **Attention:** You cannot assgin width and height seperately
                 * as normal `symbolSize`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.symbolSize
                 */
                symbolSize?: any[] | number | undefined;

                /**
                 * Precison of marking line value, which is useful when displaying
                 * average value mark line.
                 *
                 * @default
                 * 2
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.precision
                 */
                precision?: number | undefined;

                /**
                 * Mark line text.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.label
                 */
                label?: {
                    /**
                     * Whether show label or not.
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.label.show
                     */
                    show?: boolean | undefined;

                    /**
                     * Positions of labels can be:
                     *
                     * + `'start'` starting point of the line.
                     * + `'middle'` middle point of the line.
                     * + `'end'` ending point of the line.
                     *
                     * @default
                     * "end"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.label.position
                     */
                    position?: string | undefined;

                    /**
                     * Data label formatter, which supports string template
                     * and callback function.
                     * In either form, `\n` is supported to represent a new
                     * line.
                     *
                     * **String template**
                     *
                     * Model variation includes:
                     *
                     * + `{a}`: series name.
                     * + `{b}`: the name of a data item.
                     * + `{c}`: the value of a data item.
                     * + `{d}`: the percent.
                     * + `{@xxx}: the value of a dimension named`'xxx'`, for
                     * example,`{@product}`refers the value of`'product'\` dimension。
                     * + `{@[n]}: the value of a dimension at the index of`n`,
                     * for example,`{@\[3\]}\` refers the value at dimensions\[3\].
                     *
                     * **example:**
                     *
                     * ```
                     * formatter: '{b}: {d}'
                     *
                     * ```
                     *
                     * **Callback function**
                     *
                     * Callback function is in form of:
                     *
                     * ```
                     * (params: Object|Array) => string
                     *
                     * ```
                     *
                     * where `params` is the single dataset needed by formatter,
                     * which is formed as:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.label.formatter
                     */
                    formatter?: Function | string | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether show label or not.
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.label.emphasis.show
                         */
                        show?: boolean | undefined;

                        /**
                         * Positions of labels can be:
                         *
                         * + `'start'` starting point of the line.
                         * + `'middle'` middle point of the line.
                         * + `'end'` ending point of the line.
                         *
                         * @default
                         * "end"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.label.emphasis.position
                         */
                        position?: string | undefined;

                        /**
                         * Data label formatter, which supports string template
                         * and callback function.
                         * In either form, `\n` is supported to represent a
                         * new line.
                         *
                         * **String template**
                         *
                         * Model variation includes:
                         *
                         * + `{a}`: series name.
                         * + `{b}`: the name of a data item.
                         * + `{c}`: the value of a data item.
                         * + `{d}`: the percent.
                         * + `{@xxx}: the value of a dimension named`'xxx'`,
                         * for example,`{@product}`refers the value of`'product'\`
                         * dimension。
                         * + `{@[n]}: the value of a dimension at the index
                         * of`n`, for example,`{@\[3\]}\` refers the value at
                         * dimensions\[3\].
                         *
                         * **example:**
                         *
                         * ```
                         * formatter: '{b}: {d}'
                         *
                         * ```
                         *
                         * **Callback function**
                         *
                         * Callback function is in form of:
                         *
                         * ```
                         * (params: Object|Array) => string
                         *
                         * ```
                         *
                         * where `params` is the single dataset needed by formatter,
                         * which is formed as:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.label.emphasis.formatter
                         */
                        formatter?: Function | string | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Mark line style.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle
                 */
                lineStyle?: {
                    /**
                     * Line color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.lineStyle)
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * line width.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.width
                     */
                    width?: number | undefined;

                    /**
                     * line type.
                     *
                     * Options are:
                     *
                     * + `'solid'`
                     * + `'dashed'`
                     * + `'dotted'`
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.type
                     */
                    type?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.lineStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.opacity
                     */
                    opacity?: number | undefined;

                    /**
                     * Edge curvature, which supports value from 0 to 1.
                     * The larger the value, the greater the curvature.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.curveness
                     */
                    curveness?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.emphasis
                     */
                    emphasis?: {
                        /**
                         * Line color.
                         *
                         * > Color can be represented in RGB, for example `'rgb(128,
                         * 128, 128)'`.
                         * RGBA can be used when you need alpha channel, for
                         * example `'rgba(128, 128, 128, 0.5)'`.
                         * You may also use hexadecimal format, for example
                         * `'#ccc'`.
                         * Gradient color and texture are also supported besides
                         * single colors.
                         * >
                         * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.lineStyle.emphasis)
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.emphasis.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * line width.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.emphasis.width
                         */
                        width?: number | undefined;

                        /**
                         * line type.
                         *
                         * Options are:
                         *
                         * + `'solid'`
                         * + `'dashed'`
                         * + `'dotted'`
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.emphasis.type
                         */
                        type?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.lineStyle.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.emphasis.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.lineStyle.emphasis.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Data array of marking line.
                 * Every array item can be an array of one or two values, representing
                 * starting and ending point of the line, and every item is
                 * an object.
                 * Here are several ways to assign the positions of starting
                 * and ending point.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * 2. Assign coordinate position with
                 * [coord](https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.coord)
                 * attribute, in which `'min'`, `'max'`, `'average'` are supported
                 * for each dimension.
                 *
                 * 3. Use
                 * [type](https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.type)
                 * attribute to mark the maximum and minimum values in the series,
                 * in which
                 * [valueIndex](https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.valueIndex)
                 * or
                 * [valueDim](https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.valueDim)
                 * can be used to assign the dimension.
                 *
                 * 4.
                 * You may also create a mark line in Cartesian coordinate at
                 * a specific position in X or Y axis by assigning `xAxis` or
                 * `yAxis`. See
                 * [scatter-weight](https://echarts.apache.org/examples/en/editor.html?c=scatter-weight)
                 * for example.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * You may also set the type of mark line through `type`, stating
                 * whether it is for the maximum value or average value.
                 * Likewise, dimensions can be assigned through `valueIndex`.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data
                 */
                data?: {
                    /**
                     * Data of the starting point.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0
                     */
                    0?: {
                        /**
                         * Special label types, are used to label maximum value,
                         * minimum value and so on.
                         *
                         * **Options are:**
                         *
                         * + `'min'` maximum value.
                         * + `'max'` minimum value.
                         * + `'average'` average value.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.type
                         */
                        type?: string | undefined;

                        /**
                         * Works only when
                         * [type](https://echarts.apache.org/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be `0` (for xAxis, or radiusAxis), or `1`
                         * (for yAxis, or angleAxis).
                         * Dimension of the first numeric axis is used by default.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.valueIndex
                         */
                        valueIndex?: number | undefined;

                        /**
                         * Works only when
                         * [type](https://echarts.apache.org/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be the direct name of a dimension, like `x`,
                         * or `angle` for line charts, or `open`, or `close`
                         * for candlestick charts.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.valueDim
                         */
                        valueDim?: string | undefined;

                        /**
                         * Coordinates of the starting point or ending point,
                         * whose format depends on the coordinate of the series.
                         * It can be `x`, and `y` for
                         * [rectangular coordinates](https://echarts.apache.org/en/option.html#grid)
                         * , or `radius`, and `angle` for
                         * [polar coordinates](https://echarts.apache.org/en/option.html#polar)
                         * .
                         *
                         * **Notice:** For axis with
                         * [axis.type](https://echarts.apache.org/en/option.html#xAixs.type)
                         * `'category'`:
                         *
                         * + If coord value is `number`, it represents index
                         * of
                         * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                         * .
                         * + If coord value is `string`, it represents concrete
                         * value in
                         * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                         *
                         * Please notice that in this case `xAxis.data`
                         * must not be written as \[number, number,
                         *
                         * \], but can only be written \[string, string,
                         *
                         * \].
                         * Otherwise it is not able to be located by markPoint
                         * / markLine.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.0)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.coord
                         */
                        coord?: any[] | undefined;

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.markLine.data.0.name
                         */
                        name?: string | undefined;

                        /**
                         * X position according to container, in pixel.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.x
                         */
                        x?: number | undefined;

                        /**
                         * Y position according to container, in pixel.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.y
                         */
                        y?: number | undefined;

                        /**
                         * Label value, which can be ignored.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.value
                         */
                        value?: number | undefined;

                        /**
                         * Symbol of starting point.
                         *
                         * Icon types provided by ECharts includes `'circle'`,
                         * `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`,
                         * `'pin'`, `'arrow'`, `'none'`
                         *
                         * It can be set to an image with `'image://url'` ,
                         * in which URL is the link to an image, or `dataURI`
                         * of an image.
                         *
                         * An image URL example:
                         *
                         * ```
                         * 'image://http://xxx.xxx.xxx/a/b.png'
                         *
                         * ```
                         *
                         * A `dataURI` example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.0)
                         *
                         * Icons can be set to arbitrary vector path via `'path://'`
                         * in ECharts.
                         * As compared with raster image, vector paths prevent
                         * from jagging and blurring when scaled, and have a
                         * better control over changing colors.
                         * Size of vectoer icon will be adapted automatically.
                         * Refer to
                         * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                         * for more information about format of path.
                         * You may export vector paths from tools like Adobe
                         * Illustrator.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.0)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.symbol
                         */
                        symbol?: string | undefined;

                        /**
                         * starting point symbol size.
                         * It can be set to single numbers like `10`, or use
                         * an array to represent width and height.
                         * For example, `[20, 10]` means symbol width is `20`,
                         * and height is`10`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.symbolSize
                         */
                        symbolSize?: any[] | number | undefined;

                        /**
                         * Rotate degree of starting point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.symbolRotate
                         */
                        symbolRotate?: number | undefined;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.symbolKeepAspect
                         */
                        symbolKeepAspect?: boolean | undefined;

                        /**
                         * Offset of starting point symbol relative to original
                         * position.
                         * By default, symbol will be put in the center position
                         * of data.
                         * But if symbol is from user-defined vector path or
                         * image, you may not expect symbol to be in center.
                         * In this case, you may use this attribute to set offset
                         * to default position.
                         * It can be in absolute pixel value, or in relative
                         * percentage value.
                         *
                         * For example, `[0, '50%']` means to move upside side
                         * position of symbol height.
                         * It can be used to make the arrow in the bottom to
                         * be at data position when symbol is pin.
                         *
                         * @default
                         * [0, 0]
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.symbolOffset
                         */
                        symbolOffset?: any[] | undefined;

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle
                         */
                        lineStyle?: {
                            /**
                             * Line color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.0.lineStyle)
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * line width.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.width
                             */
                            width?: number | undefined;

                            /**
                             * line type.
                             *
                             * Options are:
                             *
                             * + `'solid'`
                             * + `'dashed'`
                             * + `'dotted'`
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.type
                             */
                            type?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.0.lineStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.curveness
                             */
                            curveness?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Line color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.0.lineStyle.emphasis)
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * line width.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.emphasis.width
                                 */
                                width?: number | undefined;

                                /**
                                 * line type.
                                 *
                                 * Options are:
                                 *
                                 * + `'solid'`
                                 * + `'dashed'`
                                 * + `'dotted'`
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.emphasis.type
                                 */
                                type?: string | undefined;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.0.lineStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.lineStyle.emphasis.curveness
                                 */
                                curveness?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.label
                         */
                        label?: {
                            /**
                             * Whether show label or not.
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.label.show
                             */
                            show?: boolean | undefined;

                            /**
                             * Positions of labels can be:
                             *
                             * + `'start'` starting point of the line.
                             * + `'middle'` middle point of the line.
                             * + `'end'` ending point of the line.
                             *
                             * @default
                             * "end"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.label.position
                             */
                            position?: string | undefined;

                            /**
                             * Data label formatter, which supports string template
                             * and callback function.
                             * In either form, `\n` is supported to represent
                             * a new line.
                             *
                             * **String template**
                             *
                             * Model variation includes:
                             *
                             * + `{a}`: series name.
                             * + `{b}`: the name of a data item.
                             * + `{c}`: the value of a data item.
                             * + `{d}`: the percent.
                             * + `{@xxx}: the value of a dimension named`'xxx'`,
                             * for example,`{@product}`refers the value of`'product'\`
                             * dimension。
                             * + `{@[n]}: the value of a dimension at the index
                             * of`n`, for example,`{@\[3\]}\` refers the value
                             * at dimensions\[3\].
                             *
                             * **example:**
                             *
                             * ```
                             * formatter: '{b}: {d}'
                             *
                             * ```
                             *
                             * **Callback function**
                             *
                             * Callback function is in form of:
                             *
                             * ```
                             * (params: Object|Array) => string
                             *
                             * ```
                             *
                             * where `params` is the single dataset needed by
                             * formatter, which is formed as:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.0.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.label.formatter
                             */
                            formatter?: Function | string | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether show label or not.
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.label.emphasis.show
                                 */
                                show?: boolean | undefined;

                                /**
                                 * Positions of labels can be:
                                 *
                                 * + `'start'` starting point of the line.
                                 * + `'middle'` middle point of the line.
                                 * + `'end'` ending point of the line.
                                 *
                                 * @default
                                 * "end"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.label.emphasis.position
                                 */
                                position?: string | undefined;

                                /**
                                 * Data label formatter, which supports string
                                 * template and callback function.
                                 * In either form, `\n` is supported to represent
                                 * a new line.
                                 *
                                 * **String template**
                                 *
                                 * Model variation includes:
                                 *
                                 * + `{a}`: series name.
                                 * + `{b}`: the name of a data item.
                                 * + `{c}`: the value of a data item.
                                 * + `{d}`: the percent.
                                 * + `{@xxx}: the value of a dimension named`'xxx'`,
                                 * for example,`{@product}`refers the value
                                 * of`'product'\` dimension。
                                 * + `{@[n]}: the value of a dimension at the
                                 * index of`n`, for example,`{@\[3\]}\` refers
                                 * the value at dimensions\[3\].
                                 *
                                 * **example:**
                                 *
                                 * ```
                                 * formatter: '{b}: {d}'
                                 *
                                 * ```
                                 *
                                 * **Callback function**
                                 *
                                 * Callback function is in form of:
                                 *
                                 * ```
                                 * (params: Object|Array) => string
                                 *
                                 * ```
                                 *
                                 * where `params` is the single dataset needed
                                 * by formatter, which is formed as:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.0.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.0.label.emphasis.formatter
                                 */
                                formatter?: Function | string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;

                    /**
                     * Data of the ending point.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1
                     */
                    1?: {
                        /**
                         * Special label types, are used to label maximum value,
                         * minimum value and so on.
                         *
                         * **Options are:**
                         *
                         * + `'min'` maximum value.
                         * + `'max'` minimum value.
                         * + `'average'` average value.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.type
                         */
                        type?: string | undefined;

                        /**
                         * Works only when
                         * [type](https://echarts.apache.org/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be `0` (for xAxis, or radiusAxis), or `1`
                         * (for yAxis, or angleAxis).
                         * Dimension of the first numeric axis is used by default.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.valueIndex
                         */
                        valueIndex?: number | undefined;

                        /**
                         * Works only when
                         * [type](https://echarts.apache.org/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be the direct name of a dimension, like `x`,
                         * or `angle` for line charts, or `open`, or `close`
                         * for candlestick charts.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.valueDim
                         */
                        valueDim?: string | undefined;

                        /**
                         * Coordinates of the starting point or ending point,
                         * whose format depends on the coordinate of the series.
                         * It can be `x`, and `y` for
                         * [rectangular coordinates](https://echarts.apache.org/en/option.html#grid)
                         * , or `radius`, and `angle` for
                         * [polar coordinates](https://echarts.apache.org/en/option.html#polar)
                         * .
                         *
                         * **Notice:** For axis with
                         * [axis.type](https://echarts.apache.org/en/option.html#xAixs.type)
                         * `'category'`:
                         *
                         * + If coord value is `number`, it represents index
                         * of
                         * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                         * .
                         * + If coord value is `string`, it represents concrete
                         * value in
                         * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                         *
                         * Please notice that in this case `xAxis.data`
                         * must not be written as \[number, number,
                         *
                         * \], but can only be written \[string, string,
                         *
                         * \].
                         * Otherwise it is not able to be located by markPoint
                         * / markLine.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.1)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.coord
                         */
                        coord?: any[] | undefined;

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.markLine.data.1.name
                         */
                        name?: string | undefined;

                        /**
                         * X position according to container, in pixel.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.x
                         */
                        x?: number | undefined;

                        /**
                         * Y position according to container, in pixel.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.y
                         */
                        y?: number | undefined;

                        /**
                         * Label value, which can be ignored.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.value
                         */
                        value?: number | undefined;

                        /**
                         * Symbol of ending point.
                         *
                         * Icon types provided by ECharts includes `'circle'`,
                         * `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`,
                         * `'pin'`, `'arrow'`, `'none'`
                         *
                         * It can be set to an image with `'image://url'` ,
                         * in which URL is the link to an image, or `dataURI`
                         * of an image.
                         *
                         * An image URL example:
                         *
                         * ```
                         * 'image://http://xxx.xxx.xxx/a/b.png'
                         *
                         * ```
                         *
                         * A `dataURI` example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.1)
                         *
                         * Icons can be set to arbitrary vector path via `'path://'`
                         * in ECharts.
                         * As compared with raster image, vector paths prevent
                         * from jagging and blurring when scaled, and have a
                         * better control over changing colors.
                         * Size of vectoer icon will be adapted automatically.
                         * Refer to
                         * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                         * for more information about format of path.
                         * You may export vector paths from tools like Adobe
                         * Illustrator.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.1)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.symbol
                         */
                        symbol?: string | undefined;

                        /**
                         * ending point symbol size.
                         * It can be set to single numbers like `10`, or use
                         * an array to represent width and height.
                         * For example, `[20, 10]` means symbol width is `20`,
                         * and height is`10`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.symbolSize
                         */
                        symbolSize?: any[] | number | undefined;

                        /**
                         * Rotate degree of ending point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.symbolRotate
                         */
                        symbolRotate?: number | undefined;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.symbolKeepAspect
                         */
                        symbolKeepAspect?: boolean | undefined;

                        /**
                         * Offset of ending point symbol relative to original
                         * position.
                         * By default, symbol will be put in the center position
                         * of data.
                         * But if symbol is from user-defined vector path or
                         * image, you may not expect symbol to be in center.
                         * In this case, you may use this attribute to set offset
                         * to default position.
                         * It can be in absolute pixel value, or in relative
                         * percentage value.
                         *
                         * For example, `[0, '50%']` means to move upside side
                         * position of symbol height.
                         * It can be used to make the arrow in the bottom to
                         * be at data position when symbol is pin.
                         *
                         * @default
                         * [0, 0]
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.symbolOffset
                         */
                        symbolOffset?: any[] | undefined;

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle
                         */
                        lineStyle?: {
                            /**
                             * Line color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.1.lineStyle)
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * line width.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.width
                             */
                            width?: number | undefined;

                            /**
                             * line type.
                             *
                             * Options are:
                             *
                             * + `'solid'`
                             * + `'dashed'`
                             * + `'dotted'`
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.type
                             */
                            type?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.1.lineStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.curveness
                             */
                            curveness?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Line color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.1.lineStyle.emphasis)
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * line width.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.emphasis.width
                                 */
                                width?: number | undefined;

                                /**
                                 * line type.
                                 *
                                 * Options are:
                                 *
                                 * + `'solid'`
                                 * + `'dashed'`
                                 * + `'dotted'`
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.emphasis.type
                                 */
                                type?: string | undefined;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.1.lineStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.lineStyle.emphasis.curveness
                                 */
                                curveness?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.label
                         */
                        label?: {
                            /**
                             * Whether show label or not.
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.label.show
                             */
                            show?: boolean | undefined;

                            /**
                             * Positions of labels can be:
                             *
                             * + `'start'` starting point of the line.
                             * + `'middle'` middle point of the line.
                             * + `'end'` ending point of the line.
                             *
                             * @default
                             * "end"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.label.position
                             */
                            position?: string | undefined;

                            /**
                             * Data label formatter, which supports string template
                             * and callback function.
                             * In either form, `\n` is supported to represent
                             * a new line.
                             *
                             * **String template**
                             *
                             * Model variation includes:
                             *
                             * + `{a}`: series name.
                             * + `{b}`: the name of a data item.
                             * + `{c}`: the value of a data item.
                             * + `{d}`: the percent.
                             * + `{@xxx}: the value of a dimension named`'xxx'`,
                             * for example,`{@product}`refers the value of`'product'\`
                             * dimension。
                             * + `{@[n]}: the value of a dimension at the index
                             * of`n`, for example,`{@\[3\]}\` refers the value
                             * at dimensions\[3\].
                             *
                             * **example:**
                             *
                             * ```
                             * formatter: '{b}: {d}'
                             *
                             * ```
                             *
                             * **Callback function**
                             *
                             * Callback function is in form of:
                             *
                             * ```
                             * (params: Object|Array) => string
                             *
                             * ```
                             *
                             * where `params` is the single dataset needed by
                             * formatter, which is formed as:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.1.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.label.formatter
                             */
                            formatter?: Function | string | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether show label or not.
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.label.emphasis.show
                                 */
                                show?: boolean | undefined;

                                /**
                                 * Positions of labels can be:
                                 *
                                 * + `'start'` starting point of the line.
                                 * + `'middle'` middle point of the line.
                                 * + `'end'` ending point of the line.
                                 *
                                 * @default
                                 * "end"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.label.emphasis.position
                                 */
                                position?: string | undefined;

                                /**
                                 * Data label formatter, which supports string
                                 * template and callback function.
                                 * In either form, `\n` is supported to represent
                                 * a new line.
                                 *
                                 * **String template**
                                 *
                                 * Model variation includes:
                                 *
                                 * + `{a}`: series name.
                                 * + `{b}`: the name of a data item.
                                 * + `{c}`: the value of a data item.
                                 * + `{d}`: the percent.
                                 * + `{@xxx}: the value of a dimension named`'xxx'`,
                                 * for example,`{@product}`refers the value
                                 * of`'product'\` dimension。
                                 * + `{@[n]}: the value of a dimension at the
                                 * index of`n`, for example,`{@\[3\]}\` refers
                                 * the value at dimensions\[3\].
                                 *
                                 * **example:**
                                 *
                                 * ```
                                 * formatter: '{b}: {d}'
                                 *
                                 * ```
                                 *
                                 * **Callback function**
                                 *
                                 * Callback function is in form of:
                                 *
                                 * ```
                                 * (params: Object|Array) => string
                                 *
                                 * ```
                                 *
                                 * where `params` is the single dataset needed
                                 * by formatter, which is formed as:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine.data.1.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.data.1.label.emphasis.formatter
                                 */
                                formatter?: Function | string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Whether to enable animation.
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.animation
                 */
                animation?: boolean | undefined;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.animationThreshold
                 */
                animationThreshold?: number | undefined;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine)
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.animationDuration
                 */
                animationDuration?: Function | number | undefined;

                /**
                 * Easing method used for the first animation.
                 * Varied easing effects can be found at
                 * [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing)
                 * .
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.animationEasing
                 */
                animationEasing?: string | undefined;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.animationDelay
                 */
                animationDelay?: Function | number | undefined;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine)
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number | undefined;

                /**
                 * Easing method used for animation.
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.animationEasingUpdate
                 */
                animationEasingUpdate?: string | undefined;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markLine.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number | undefined;
            } | undefined;

            /**
             * Used to mark an area in chart.
             * For example, mark a time interval.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea
             */
            markArea?: {
                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.silent
                 */
                silent?: boolean | undefined;

                /**
                 * Label in mark area.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.show
                     */
                    show?: boolean | undefined;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                     * .
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.position
                     */
                    position?: any[] | string | undefined;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                     * .
                     *
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                     * .
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.offset
                     */
                    offset?: any[] | undefined;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.color
                     */
                    color?: string | undefined;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.fontStyle
                     */
                    fontStyle?: string | undefined;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.fontSize
                     */
                    fontSize?: number | undefined;

                    /**
                     * Horizontal alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'left'`
                     * + `'center'`
                     * + `'right'`
                     *
                     * If `align` is not set in `rich`, `align` in parent level
                     * will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.align
                     */
                    align?: string | undefined;

                    /**
                     * Vertical alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'top'`
                     * + `'middle'`
                     * + `'bottom'`
                     *
                     * If `verticalAlign` is not set in `rich`, `verticalAlign`
                     * in parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.borderRadius
                     */
                    borderRadius?: number | undefined;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.width
                     */
                    width?: number | string | undefined;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string | undefined;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string | undefined;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number | undefined;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string | undefined;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number | undefined;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string | undefined;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show label.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.show
                         */
                        show?: boolean | undefined;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.emphasis)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                         * .
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.position
                         */
                        position?: any[] | string | undefined;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                         * .
                         *
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                         * .
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.offset
                         */
                        offset?: any[] | undefined;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.color
                         */
                        color?: string | undefined;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.fontStyle
                         */
                        fontStyle?: string | undefined;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.fontSize
                         */
                        fontSize?: number | undefined;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.align
                         */
                        align?: string | undefined;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.emphasis)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.borderRadius
                         */
                        borderRadius?: number | undefined;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.width
                         */
                        width?: number | string | undefined;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string | undefined;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string | undefined;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number | undefined;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string | undefined;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number | undefined;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string | undefined;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Style of the mark area.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.opacity
                     */
                    opacity?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.emphasis
                     */
                    emphasis?: {
                        /**
                         * color.
                         *
                         * > Color can be represented in RGB, for example `'rgb(128,
                         * 128, 128)'`.
                         * RGBA can be used when you need alpha channel, for
                         * example `'rgba(128, 128, 128, 0.5)'`.
                         * You may also use hexadecimal format, for example
                         * `'#ccc'`.
                         * Gradient color and texture are also supported besides
                         * single colors.
                         * >
                         * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.itemStyle.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.emphasis.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.emphasis.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.emphasis.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.itemStyle.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.itemStyle.emphasis.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * The scope of the area is defined by `data`, which is an array
                 * with two item, representing the left-top point and the right-bottom
                 * point of rectangle area.
                 * Each item can be defined as follows:
                 *
                 * 1.
                 * Specify the coordinate in screen coordinate system using
                 * [x](https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.y)
                 * , where the unit is pixel (e.g.,
                 * the value is `5`), or percent (e.g.,
                 * the value is `'35%'`).
                 *
                 * 2.
                 * Specify the coordinate in data coordinate system (i.e.,
                 * cartesian) using
                 * [coord](https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.coord)
                 * , which can be also set as `'min'`, `'max'`, `'average'`
                 * (e.g,
                 * `coord: [23, 'min']`, or `coord: ['average', 'max']`)。
                 *
                 * 1.
                 * Locate the point on the min value or max value of `series.data`
                 * using
                 * [type](https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.type)
                 * , where
                 * [valueIndex](https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.valueIndex)
                 * or
                 * [valueDim](https://echarts.apache.org/en/option.html#series-scatter.markPoint.data.0.valueDim)
                 * can be used to specify the dimension on which the min, max
                 * or average are calculated.
                 * 2.
                 * If in cartesian, you can only specify `xAxis` or `yAxis`
                 * to define a mark area based on only X or Y axis, see sample
                 * [scatter-weight](https://echarts.apache.org/examples/en/editor.html?c=scatter-weight)
                 *
                 * The priority follows as above if more than one above definition
                 * used.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data
                 */
                data?: {
                    /**
                     * Specify the left-top point.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0
                     */
                    0?: {
                        /**
                         * Specify this item is on min or max or average value.
                         *
                         * **Options:**
                         *
                         * + `'min'` max value。
                         * + `'max'` min value。
                         * + `'average'` average value。
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.type
                         */
                        type?: string | undefined;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://echarts.apache.org/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be `0` (means xAxis, radiusAxis) or
                         * `1` (means yAxis, angleAxis), using the dimension
                         * of the first axis by default.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.valueIndex
                         */
                        valueIndex?: number | undefined;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://echarts.apache.org/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be the name of the dimension (for example,
                         * the value can be `x`, `angle` in line chart, and
                         * `open`, `close` in candlestick).
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.valueDim
                         */
                        valueDim?: string | undefined;

                        /**
                         * The format is \[start coordinate, end coordinate\],
                         * where the coordinate system can be `x`, `y` on
                         * [cartesian](https://echarts.apache.org/en/option.html#grid)
                         * , or `radius`, `angle` on
                         * [polar](https://echarts.apache.org/en/option.html#polar)
                         * .
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.coord
                         */
                        coord?: any[] | undefined;

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.markArea.data.0.name
                         */
                        name?: string | undefined;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.x
                         */
                        x?: number | undefined;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.y
                         */
                        y?: number | undefined;

                        /**
                         * value of the item, not necessary.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.value
                         */
                        value?: number | undefined;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle
                         */
                        itemStyle?: {
                            /**
                             * color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.itemStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.borderColor
                             */
                            borderColor?: EChartOption.Color | undefined;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.borderType
                             */
                            borderType?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.itemStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.emphasis
                             */
                            emphasis?: {
                                /**
                                 * color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.itemStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: EChartOption.Color | undefined;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.emphasis.borderType
                                 */
                                borderType?: string | undefined;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.itemStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.itemStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label style of the item.
                         * Label style of start point and end point will be
                         * merged together.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label
                         */
                        label?: {
                            /**
                             * Whether to show label.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.show
                             */
                            show?: boolean | undefined;

                            /**
                             * Label position.
                             *
                             * **Followings are the options:**
                             *
                             * + \[x, y\]
                             *
                             * Use relative percentage, or absolute pixel values
                             * to represent position of label relative to top-left
                             * corner of bounding box. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label)
                             *
                             * + 'top'
                             *
                             * + 'left'
                             * + 'right'
                             * + 'bottom'
                             * + 'inside'
                             * + 'insideLeft'
                             * + 'insideRight'
                             * + 'insideTop'
                             * + 'insideBottom'
                             * + 'insideTopLeft'
                             * + 'insideBottomLeft'
                             * + 'insideTopRight'
                             * + 'insideBottomRight'
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                             * .
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.position
                             */
                            position?: any[] | string | undefined;

                            /**
                             * Distance to the host graphic element.
                             * Works when position is string value (like `'top'`、`'insideRight'`).
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                             * .
                             *
                             * @default
                             * 5
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.distance
                             */
                            distance?: number | undefined;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                             * .
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rotate
                             */
                            rotate?: number | undefined;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.offset
                             */
                            offset?: any[] | undefined;

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.color
                             */
                            color?: string | undefined;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.fontStyle
                             */
                            fontStyle?: string | undefined;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.fontSize
                             */
                            fontSize?: number | undefined;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.align
                             */
                            align?: string | undefined;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.borderRadius
                             */
                            borderRadius?: number | undefined;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.width
                             */
                            width?: number | string | undefined;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {
                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.color
                                     */
                                    color?: string | undefined;

                                    /**
                                     * font style
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'italic'`
                                     * + `'oblique'`
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                     */
                                    fontStyle?: string | undefined;

                                    /**
                                     * font thick weight
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'bold'`
                                     * + `'bolder'`
                                     * + `'lighter'`
                                     * + 100 | 200 | 300 | 400...
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number | undefined;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string | undefined;

                                    /**
                                     * font size
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number | undefined;

                                    /**
                                     * Horizontal alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'left'`
                                     * + `'center'`
                                     * + `'right'`
                                     *
                                     * If `align` is not set in `rich`, `align`
                                     * in parent level will be used.
                                     * For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string | undefined;

                                    /**
                                     * Vertical alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'top'`
                                     * + `'middle'`
                                     * + `'bottom'`
                                     *
                                     * If `verticalAlign` is not set in `rich`,
                                     * `verticalAlign` in parent level will
                                     * be used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string | undefined;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number | undefined;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string | undefined;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string | undefined;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number | undefined;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number | undefined;

                                    /**
                                     * Padding of the text fregment, for example:
                                     *
                                     * + `padding: [3, 4, 5, 6]`: represents
                                     * padding of `[top, right, bottom, left]`.
                                     * + `padding: 4`: represents `padding:
                                     * [4, 4, 4, 4]`.
                                     * + `padding: [3, 4]`: represents `padding:
                                     * [3, 4, 3, 4]`.
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number | undefined;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string | undefined;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number | undefined;

                                    /**
                                     * Width of the text block.
                                     * It is the width of the text by default.
                                     * In most cases, there is no need to specify
                                     * it.
                                     * You may want to use it in some cases
                                     * like make simple table or using background
                                     * image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * `width` can also be percent string, like
                                     * `'100%'`, which represents the percent
                                     * of `contentWidth` (that is, the width
                                     * without `padding`) of its container box.
                                     * It is based on `contentWidth` because
                                     * that each text fregment is layout based
                                     * on the `content box`, where it makes
                                     * no sense that calculating width based
                                     * on `outerWith` in prectice.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string | undefined;

                                    /**
                                     * Height of the text block.
                                     * It is the width of the text by default.
                                     * You may want to use it in some cases
                                     * like using background image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string | undefined;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string | undefined;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number | undefined;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string | undefined;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number | undefined;
                                };
                            } | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether to show label.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.show
                                 */
                                show?: boolean | undefined;

                                /**
                                 * Label position.
                                 *
                                 * **Followings are the options:**
                                 *
                                 * + \[x, y\]
                                 *
                                 * Use relative percentage, or absolute pixel
                                 * values to represent position of label relative
                                 * to top-left corner of bounding box.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.emphasis)
                                 *
                                 * + 'top'
                                 *
                                 * + 'left'
                                 * + 'right'
                                 * + 'bottom'
                                 * + 'inside'
                                 * + 'insideLeft'
                                 * + 'insideRight'
                                 * + 'insideTop'
                                 * + 'insideBottom'
                                 * + 'insideTopLeft'
                                 * + 'insideBottomLeft'
                                 * + 'insideTopRight'
                                 * + 'insideBottomRight'
                                 *
                                 * See:
                                 * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                                 * .
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.position
                                 */
                                position?: any[] | string | undefined;

                                /**
                                 * Distance to the host graphic element.
                                 * Works when position is string value (like
                                 * `'top'`、`'insideRight'`).
                                 *
                                 * See:
                                 * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                                 * .
                                 *
                                 * @default
                                 * 5
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.distance
                                 */
                                distance?: number | undefined;

                                /**
                                 * Rotate label, from -90 degree to 90, positive
                                 * value represents rotate anti-clockwise.
                                 *
                                 * See:
                                 * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                                 * .
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rotate
                                 */
                                rotate?: number | undefined;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.offset
                                 */
                                offset?: any[] | undefined;

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.color
                                 */
                                color?: string | undefined;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.fontStyle
                                 */
                                fontStyle?: string | undefined;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.fontSize
                                 */
                                fontSize?: number | undefined;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.align
                                 */
                                align?: string | undefined;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.emphasis)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.borderRadius
                                 */
                                borderRadius?: number | undefined;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.width
                                 */
                                width?: number | string | undefined;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich
                                 */
                                rich?: {
                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                     */
                                    [userStyle: string]: {
                                        /**
                                         * text color.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * ""#fff""
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                         */
                                        color?: string | undefined;

                                        /**
                                         * font style
                                         *
                                         * Options are:
                                         *
                                         * + `'normal'`
                                         * + `'italic'`
                                         * + `'oblique'`
                                         *
                                         * @default
                                         * "normal"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                         */
                                        fontStyle?: string | undefined;

                                        /**
                                         * font thick weight
                                         *
                                         * Options are:
                                         *
                                         * + `'normal'`
                                         * + `'bold'`
                                         * + `'bolder'`
                                         * + `'lighter'`
                                         * + 100 | 200 | 300 | 400...
                                         *
                                         * @default
                                         * "normal"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string | number | undefined;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string | undefined;

                                        /**
                                         * font size
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                         */
                                        fontSize?: number | undefined;

                                        /**
                                         * Horizontal alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'left'`
                                         * + `'center'`
                                         * + `'right'`
                                         *
                                         * If `align` is not set in `rich`,
                                         * `align` in parent level will be used.
                                         * For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                         */
                                        align?: string | undefined;

                                        /**
                                         * Vertical alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'top'`
                                         * + `'middle'`
                                         * + `'bottom'`
                                         *
                                         * If `verticalAlign` is not set in
                                         * `rich`, `verticalAlign` in parent
                                         * level will be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string | undefined;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                         */
                                        lineHeight?: number | undefined;

                                        /**
                                         * Background color of the text fregment.
                                         *
                                         * Can be color string, like `'#123234'`,
                                         * `'red'`, `rgba(0,23,11,0.3)'`.
                                         *
                                         * Or image can be used, for example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * `width` or `height` can be specified
                                         * when using background image, or auto
                                         * adapted by default.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                         */
                                        backgroundColor?: object | string | undefined;

                                        /**
                                         * Border color of the text fregment.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string | undefined;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number | undefined;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                         */
                                        borderRadius?: number | undefined;

                                        /**
                                         * Padding of the text fregment, for
                                         * example:
                                         *
                                         * + `padding: [3, 4, 5, 6]`: represents
                                         * padding of `[top, right, bottom,
                                         * left]`.
                                         * + `padding: 4`: represents `padding:
                                         * [4, 4, 4, 4]`.
                                         * + `padding: [3, 4]`: represents `padding:
                                         * [3, 4, 3, 4]`.
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number | undefined;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string | undefined;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                         */
                                        shadowOffsetY?: number | undefined;

                                        /**
                                         * Width of the text block.
                                         * It is the width of the text by default.
                                         * In most cases, there is no need to
                                         * specify it.
                                         * You may want to use it in some cases
                                         * like make simple table or using background
                                         * image (see `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * `width` can also be percent string,
                                         * like `'100%'`, which represents the
                                         * percent of `contentWidth` (that is,
                                         * the width without `padding`) of its
                                         * container box.
                                         * It is based on `contentWidth` because
                                         * that each text fregment is layout
                                         * based on the `content box`, where
                                         * it makes no sense that calculating
                                         * width based on `outerWith` in prectice.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                         */
                                        width?: number | string | undefined;

                                        /**
                                         * Height of the text block.
                                         * It is the width of the text by default.
                                         * You may want to use it in some cases
                                         * like using background image (see
                                         * `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                         */
                                        height?: number | string | undefined;

                                        /**
                                         * Storke color of the text.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string | undefined;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number | undefined;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string | undefined;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                         */
                                        textShadowOffsetY?: number | undefined;
                                    };
                                } | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;

                    /**
                     * Specify the right-bottom point.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1
                     */
                    1?: {
                        /**
                         * Specify this item is on min or max or average value.
                         *
                         * **Options:**
                         *
                         * + `'min'` max value。
                         * + `'max'` min value。
                         * + `'average'` average value。
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.type
                         */
                        type?: string | undefined;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://echarts.apache.org/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be `0` (means xAxis, radiusAxis) or
                         * `1` (means yAxis, angleAxis), using the dimension
                         * of the first axis by default.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.valueIndex
                         */
                        valueIndex?: number | undefined;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://echarts.apache.org/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be the name of the dimension (for example,
                         * the value can be `x`, `angle` in line chart, and
                         * `open`, `close` in candlestick).
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.valueDim
                         */
                        valueDim?: string | undefined;

                        /**
                         * The format is \[start coordinate, end coordinate\],
                         * where the coordinate system can be `x`, `y` on
                         * [cartesian](https://echarts.apache.org/en/option.html#grid)
                         * , or `radius`, `angle` on
                         * [polar](https://echarts.apache.org/en/option.html#polar)
                         * .
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.coord
                         */
                        coord?: any[] | undefined;

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.markArea.data.1.name
                         */
                        name?: string | undefined;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.x
                         */
                        x?: number | undefined;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.y
                         */
                        y?: number | undefined;

                        /**
                         * value of the item, not necessary.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.value
                         */
                        value?: number | undefined;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle
                         */
                        itemStyle?: {
                            /**
                             * color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.itemStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.borderColor
                             */
                            borderColor?: EChartOption.Color | undefined;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.borderType
                             */
                            borderType?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.itemStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.emphasis
                             */
                            emphasis?: {
                                /**
                                 * color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.itemStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: EChartOption.Color | undefined;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.emphasis.borderType
                                 */
                                borderType?: string | undefined;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.itemStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.itemStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label style of the item.
                         * Label style of start point and end point will be
                         * merged together.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label
                         */
                        label?: {
                            /**
                             * Whether to show label.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.show
                             */
                            show?: boolean | undefined;

                            /**
                             * Label position.
                             *
                             * **Followings are the options:**
                             *
                             * + \[x, y\]
                             *
                             * Use relative percentage, or absolute pixel values
                             * to represent position of label relative to top-left
                             * corner of bounding box. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label)
                             *
                             * + 'top'
                             *
                             * + 'left'
                             * + 'right'
                             * + 'bottom'
                             * + 'inside'
                             * + 'insideLeft'
                             * + 'insideRight'
                             * + 'insideTop'
                             * + 'insideBottom'
                             * + 'insideTopLeft'
                             * + 'insideBottomLeft'
                             * + 'insideTopRight'
                             * + 'insideBottomRight'
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                             * .
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.position
                             */
                            position?: any[] | string | undefined;

                            /**
                             * Distance to the host graphic element.
                             * Works when position is string value (like `'top'`、`'insideRight'`).
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                             * .
                             *
                             * @default
                             * 5
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.distance
                             */
                            distance?: number | undefined;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                             * .
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rotate
                             */
                            rotate?: number | undefined;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.offset
                             */
                            offset?: any[] | undefined;

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.color
                             */
                            color?: string | undefined;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.fontStyle
                             */
                            fontStyle?: string | undefined;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.fontSize
                             */
                            fontSize?: number | undefined;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.align
                             */
                            align?: string | undefined;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.borderRadius
                             */
                            borderRadius?: number | undefined;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.width
                             */
                            width?: number | string | undefined;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {
                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.color
                                     */
                                    color?: string | undefined;

                                    /**
                                     * font style
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'italic'`
                                     * + `'oblique'`
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                     */
                                    fontStyle?: string | undefined;

                                    /**
                                     * font thick weight
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'bold'`
                                     * + `'bolder'`
                                     * + `'lighter'`
                                     * + 100 | 200 | 300 | 400...
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number | undefined;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string | undefined;

                                    /**
                                     * font size
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number | undefined;

                                    /**
                                     * Horizontal alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'left'`
                                     * + `'center'`
                                     * + `'right'`
                                     *
                                     * If `align` is not set in `rich`, `align`
                                     * in parent level will be used.
                                     * For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string | undefined;

                                    /**
                                     * Vertical alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'top'`
                                     * + `'middle'`
                                     * + `'bottom'`
                                     *
                                     * If `verticalAlign` is not set in `rich`,
                                     * `verticalAlign` in parent level will
                                     * be used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string | undefined;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number | undefined;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string | undefined;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string | undefined;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number | undefined;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number | undefined;

                                    /**
                                     * Padding of the text fregment, for example:
                                     *
                                     * + `padding: [3, 4, 5, 6]`: represents
                                     * padding of `[top, right, bottom, left]`.
                                     * + `padding: 4`: represents `padding:
                                     * [4, 4, 4, 4]`.
                                     * + `padding: [3, 4]`: represents `padding:
                                     * [3, 4, 3, 4]`.
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number | undefined;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string | undefined;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number | undefined;

                                    /**
                                     * Width of the text block.
                                     * It is the width of the text by default.
                                     * In most cases, there is no need to specify
                                     * it.
                                     * You may want to use it in some cases
                                     * like make simple table or using background
                                     * image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * `width` can also be percent string, like
                                     * `'100%'`, which represents the percent
                                     * of `contentWidth` (that is, the width
                                     * without `padding`) of its container box.
                                     * It is based on `contentWidth` because
                                     * that each text fregment is layout based
                                     * on the `content box`, where it makes
                                     * no sense that calculating width based
                                     * on `outerWith` in prectice.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string | undefined;

                                    /**
                                     * Height of the text block.
                                     * It is the width of the text by default.
                                     * You may want to use it in some cases
                                     * like using background image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string | undefined;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string | undefined;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number | undefined;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string | undefined;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number | undefined;
                                };
                            } | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether to show label.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.show
                                 */
                                show?: boolean | undefined;

                                /**
                                 * Label position.
                                 *
                                 * **Followings are the options:**
                                 *
                                 * + \[x, y\]
                                 *
                                 * Use relative percentage, or absolute pixel
                                 * values to represent position of label relative
                                 * to top-left corner of bounding box.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.emphasis)
                                 *
                                 * + 'top'
                                 *
                                 * + 'left'
                                 * + 'right'
                                 * + 'bottom'
                                 * + 'inside'
                                 * + 'insideLeft'
                                 * + 'insideRight'
                                 * + 'insideTop'
                                 * + 'insideBottom'
                                 * + 'insideTopLeft'
                                 * + 'insideBottomLeft'
                                 * + 'insideTopRight'
                                 * + 'insideBottomRight'
                                 *
                                 * See:
                                 * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                                 * .
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.position
                                 */
                                position?: any[] | string | undefined;

                                /**
                                 * Distance to the host graphic element.
                                 * Works when position is string value (like
                                 * `'top'`、`'insideRight'`).
                                 *
                                 * See:
                                 * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                                 * .
                                 *
                                 * @default
                                 * 5
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.distance
                                 */
                                distance?: number | undefined;

                                /**
                                 * Rotate label, from -90 degree to 90, positive
                                 * value represents rotate anti-clockwise.
                                 *
                                 * See:
                                 * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                                 * .
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rotate
                                 */
                                rotate?: number | undefined;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.offset
                                 */
                                offset?: any[] | undefined;

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.color
                                 */
                                color?: string | undefined;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.fontStyle
                                 */
                                fontStyle?: string | undefined;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.fontSize
                                 */
                                fontSize?: number | undefined;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.align
                                 */
                                align?: string | undefined;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.emphasis)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.borderRadius
                                 */
                                borderRadius?: number | undefined;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.width
                                 */
                                width?: number | string | undefined;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich
                                 */
                                rich?: {
                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                     */
                                    [userStyle: string]: {
                                        /**
                                         * text color.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * ""#fff""
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                         */
                                        color?: string | undefined;

                                        /**
                                         * font style
                                         *
                                         * Options are:
                                         *
                                         * + `'normal'`
                                         * + `'italic'`
                                         * + `'oblique'`
                                         *
                                         * @default
                                         * "normal"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                         */
                                        fontStyle?: string | undefined;

                                        /**
                                         * font thick weight
                                         *
                                         * Options are:
                                         *
                                         * + `'normal'`
                                         * + `'bold'`
                                         * + `'bolder'`
                                         * + `'lighter'`
                                         * + 100 | 200 | 300 | 400...
                                         *
                                         * @default
                                         * "normal"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string | number | undefined;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string | undefined;

                                        /**
                                         * font size
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                         */
                                        fontSize?: number | undefined;

                                        /**
                                         * Horizontal alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'left'`
                                         * + `'center'`
                                         * + `'right'`
                                         *
                                         * If `align` is not set in `rich`,
                                         * `align` in parent level will be used.
                                         * For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                         */
                                        align?: string | undefined;

                                        /**
                                         * Vertical alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'top'`
                                         * + `'middle'`
                                         * + `'bottom'`
                                         *
                                         * If `verticalAlign` is not set in
                                         * `rich`, `verticalAlign` in parent
                                         * level will be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string | undefined;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                         */
                                        lineHeight?: number | undefined;

                                        /**
                                         * Background color of the text fregment.
                                         *
                                         * Can be color string, like `'#123234'`,
                                         * `'red'`, `rgba(0,23,11,0.3)'`.
                                         *
                                         * Or image can be used, for example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * `width` or `height` can be specified
                                         * when using background image, or auto
                                         * adapted by default.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                         */
                                        backgroundColor?: object | string | undefined;

                                        /**
                                         * Border color of the text fregment.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string | undefined;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number | undefined;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                         */
                                        borderRadius?: number | undefined;

                                        /**
                                         * Padding of the text fregment, for
                                         * example:
                                         *
                                         * + `padding: [3, 4, 5, 6]`: represents
                                         * padding of `[top, right, bottom,
                                         * left]`.
                                         * + `padding: 4`: represents `padding:
                                         * [4, 4, 4, 4]`.
                                         * + `padding: [3, 4]`: represents `padding:
                                         * [3, 4, 3, 4]`.
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number | undefined;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string | undefined;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                         */
                                        shadowOffsetY?: number | undefined;

                                        /**
                                         * Width of the text block.
                                         * It is the width of the text by default.
                                         * In most cases, there is no need to
                                         * specify it.
                                         * You may want to use it in some cases
                                         * like make simple table or using background
                                         * image (see `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * `width` can also be percent string,
                                         * like `'100%'`, which represents the
                                         * percent of `contentWidth` (that is,
                                         * the width without `padding`) of its
                                         * container box.
                                         * It is based on `contentWidth` because
                                         * that each text fregment is layout
                                         * based on the `content box`, where
                                         * it makes no sense that calculating
                                         * width based on `outerWith` in prectice.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                         */
                                        width?: number | string | undefined;

                                        /**
                                         * Height of the text block.
                                         * It is the width of the text by default.
                                         * You may want to use it in some cases
                                         * like using background image (see
                                         * `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                         */
                                        height?: number | string | undefined;

                                        /**
                                         * Storke color of the text.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string | undefined;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number | undefined;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string | undefined;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                         */
                                        textShadowOffsetY?: number | undefined;
                                    };
                                } | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Whether to enable animation.
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.animation
                 */
                animation?: boolean | undefined;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.animationThreshold
                 */
                animationThreshold?: number | undefined;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea)
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.animationDuration
                 */
                animationDuration?: Function | number | undefined;

                /**
                 * Easing method used for the first animation.
                 * Varied easing effects can be found at
                 * [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing)
                 * .
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.animationEasing
                 */
                animationEasing?: string | undefined;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.animationDelay
                 */
                animationDelay?: Function | number | undefined;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea)
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number | undefined;

                /**
                 * Easing method used for animation.
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.animationEasingUpdate
                 */
                animationEasingUpdate?: string | undefined;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.markArea.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number | undefined;
            } | undefined;

            /**
             * `zlevel` value of all graghical elements in scatter chart.
             *
             * `zlevel` is used to make layers with Canvas.
             * Graphical elements with different `zlevel` values will be placed
             * in different Canvases, which is a common optimization technique.
             * We can put those frequently changed elements (like those with
             * animations) to a seperate `zlevel`.
             * Notice that too many Canvases will increase memory cost, and
             * should be used carefully on mobile phones to avoid crash.
             *
             * Canvases with bigger `zlevel` will be placed on Canvases with
             * smaller `zlevel`.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.zlevel
             */
            zlevel?: number | undefined;

            /**
             * `z` value of all graghical elements in scatter chart, which controls
             * order of drawing graphical components.
             * Components with smaller `z` values may be overwritten by those
             * with larger `z` values.
             *
             * `z` has a lower priority to `zlevel`, and will not create new
             * Canvas.
             *
             * @default
             * 2
             * @see https://echarts.apache.org/en/option.html#series-scatter.z
             */
            z?: number | undefined;

            /**
             * Whether to ignore mouse events.
             * Default value is false, for triggering and responding to mouse
             * events.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.silent
             */
            silent?: boolean | undefined;

            /**
             * Whether to enable animation.
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-scatter.animation
             */
            animation?: boolean | undefined;

            /**
             * Whether to set graphic number threshold to animation.
             * Animation will be disabled when graphic number is larger than
             * threshold.
             *
             * @default
             * 2000
             * @see https://echarts.apache.org/en/option.html#series-scatter.animationThreshold
             */
            animationThreshold?: number | undefined;

            /**
             * Duration of the first animation, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * @default
             * 1000
             * @see https://echarts.apache.org/en/option.html#series-scatter.animationDuration
             */
            animationDuration?: Function | number | undefined;

            /**
             * Easing method used for the first animation.
             * Varied easing effects can be found at
             * [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing)
             * .
             *
             * @default
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-scatter.animationEasing
             */
            animationEasing?: string | undefined;

            /**
             * Delay before updating the first animation, which supports callback
             * function for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.animationDelay
             */
            animationDelay?: Function | number | undefined;

            /**
             * Time for animation to complete, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * @default
             * 300
             * @see https://echarts.apache.org/en/option.html#series-scatter.animationDurationUpdate
             */
            animationDurationUpdate?: Function | number | undefined;

            /**
             * Easing method used for animation.
             *
             * @default
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-scatter.animationEasingUpdate
             */
            animationEasingUpdate?: string | undefined;

            /**
             * Delay before updating animation, which supports callback function
             * for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.animationDelayUpdate
             */
            animationDelayUpdate?: Function | number | undefined;

            /**
             * tooltip settings in this series.
             *
             * @see https://echarts.apache.org/en/option.html#series-scatter.tooltip
             */
            tooltip?: BaseTooltip | undefined;
        }

        namespace SeriesScatter {
            interface DataObject {
                /**
                 * the name of data item.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.name
                 */
                name?: string | undefined;

                /**
                 * the value of data item.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.value
                 */
                value?: any[] | undefined;

                /**
                 * Symbol of single data.
                 *
                 * Icon types provided by ECharts includes `'circle'`, `'rect'`,
                 * `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`,
                 * `'none'`
                 *
                 * It can be set to an image with `'image://url'` , in which
                 * URL is the link to an image, or `dataURI` of an image.
                 *
                 * An image URL example:
                 *
                 * ```
                 * 'image://http://xxx.xxx.xxx/a/b.png'
                 *
                 * ```
                 *
                 * A `dataURI` example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data)
                 *
                 * Icons can be set to arbitrary vector path via `'path://'`
                 * in ECharts.
                 * As compared with raster image, vector paths prevent from
                 * jagging and blurring when scaled, and have a better control
                 * over changing colors.
                 * Size of vectoer icon will be adapted automatically.
                 * Refer to
                 * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                 * for more information about format of path.
                 * You may export vector paths from tools like Adobe Illustrator.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.symbol
                 */
                symbol?: string | undefined;

                /**
                 * single data symbol size.
                 * It can be set to single numbers like `10`, or use an array
                 * to represent width and height.
                 * For example, `[20, 10]` means symbol width is `20`, and height
                 * is`10`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.symbolSize
                 */
                symbolSize?: any[] | number | undefined;

                /**
                 * Rotate degree of single data symbol.
                 * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                 * `symbolRotate` value will be ignored, and compulsively use
                 * tangent angle.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.symbolRotate
                 */
                symbolRotate?: number | undefined;

                /**
                 * Whether to keep aspect for symbols in the form of `path://`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.symbolKeepAspect
                 */
                symbolKeepAspect?: boolean | undefined;

                /**
                 * Offset of single data symbol relative to original position.
                 * By default, symbol will be put in the center position of
                 * data.
                 * But if symbol is from user-defined vector path or image,
                 * you may not expect symbol to be in center.
                 * In this case, you may use this attribute to set offset to
                 * default position.
                 * It can be in absolute pixel value, or in relative percentage
                 * value.
                 *
                 * For example, `[0, '50%']` means to move upside side position
                 * of symbol height.
                 * It can be used to make the arrow in the bottom to be at data
                 * position when symbol is pin.
                 *
                 * @default
                 * [0, 0]
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.symbolOffset
                 */
                symbolOffset?: any[] | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.show
                     */
                    show?: boolean | undefined;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                     * .
                     *
                     * @default
                     * "inside"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.position
                     */
                    position?: any[] | string | undefined;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                     * .
                     *
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                     * .
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.offset
                     */
                    offset?: any[] | undefined;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.color
                     */
                    color?: string | undefined;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.fontStyle
                     */
                    fontStyle?: string | undefined;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.fontSize
                     */
                    fontSize?: number | undefined;

                    /**
                     * Horizontal alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'left'`
                     * + `'center'`
                     * + `'right'`
                     *
                     * If `align` is not set in `rich`, `align` in parent level
                     * will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.align
                     */
                    align?: string | undefined;

                    /**
                     * Vertical alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'top'`
                     * + `'middle'`
                     * + `'bottom'`
                     *
                     * If `verticalAlign` is not set in `rich`, `verticalAlign`
                     * in parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.borderRadius
                     */
                    borderRadius?: number | undefined;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.width
                     */
                    width?: number | string | undefined;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string | undefined;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string | undefined;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number | undefined;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string | undefined;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number | undefined;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string | undefined;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;
                } | undefined;

                /**
                 * the style setting about single data point(bubble).
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis
                 */
                emphasis?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label
                     */
                    label?: {
                        /**
                         * Whether to show label.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.show
                         */
                        show?: boolean | undefined;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.label)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                         * .
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.position
                         */
                        position?: any[] | string | undefined;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                         * .
                         *
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                         * .
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.offset
                         */
                        offset?: any[] | undefined;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.color
                         */
                        color?: string | undefined;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.fontStyle
                         */
                        fontStyle?: string | undefined;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.fontSize
                         */
                        fontSize?: number | undefined;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.align
                         */
                        align?: string | undefined;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.label)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.borderRadius
                         */
                        borderRadius?: number | undefined;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.width
                         */
                        width?: number | string | undefined;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string | undefined;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string | undefined;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number | undefined;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string | undefined;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number | undefined;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string | undefined;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * color.
                         *
                         * > Color can be represented in RGB, for example `'rgb(128,
                         * 128, 128)'`.
                         * RGBA can be used when you need alpha channel, for
                         * example `'rgba(128, 128, 128, 0.5)'`.
                         * You may also use hexadecimal format, for example
                         * `'#ccc'`.
                         * Gradient color and texture are also supported besides
                         * single colors.
                         * >
                         * > [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.itemStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-scatter.scatter.data.emphasis.itemStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-scatter.data.emphasis.itemStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * tooltip settings in this series data.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-scatter.data.tooltip
                 */
                tooltip?: BaseTooltip | undefined;
            }
        }
    }
}
