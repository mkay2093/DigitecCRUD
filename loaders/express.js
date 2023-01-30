const bodyParser = require('body-parser')
const cors = require('cors')

// API routes
const ProductRoutes = require('../routes/ProductRouter')
const ProductItemRoutes = require('../routes/ProductItemRouter')

const express = require('express')

// const app = express();

module.exports = ({app}) => {
    /**
     * Enable cors on all actions
     */
    app.use(cors());

    /**
     * Transform string to JSON.
     */
    app.use(bodyParser.json());

    app.use(express.urlencoded({extended: true}));
    /**
     * SERVERS
     */
    app.use('/productItem', ProductItemRoutes);
    app.use('/product', ProductRoutes);

    /**
     * Check API health.
     */
    app.get(`/status`, (req, res) => {
        res.status(200).send("running...");
    });

    /**
     * Catch 404 and forward to error handle.
     */
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    /**
     * Global error catcher.
     */
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message
            }
        });
    });

};
