const asyncHandler = require("../middleware/async");
const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");


// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getAllBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find();

    return res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    })
})

// @desc    Get bootcamp
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
        return next(new ErrorResponse('Bootcamp not found', 404));
    }

    return res.status(200).json({
        success: true,
        data: bootcamp
    })
})

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamps = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.create(req.body);

    return res.status(201).json({
        status: 'success',
        data: bootcamp,
    })
})

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        });

    if (!bootcamp) {
        return next(new ErrorResponse('Bootcamp not found', 404));
    }

    return res.status(200).json({
        success: true,
        data: bootcamp
    })
})

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    if (!bootcamp) {
        return next(new ErrorResponse('Bootcamp not found', 404));
    }

    return res.status(200).json({
        success: true,
        message: "Bootcamp deleted"
    })
})