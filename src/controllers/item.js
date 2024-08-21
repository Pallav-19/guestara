import handleService from '../handlers/handleService.js';
import ItemServices from '../services/item.js';

const itemService = new ItemServices();

export const createItem = async (req, res, next) => handleService(itemService.create(req.body), res, next, 201);

export const getItems = async (req, res, next) => handleService(itemService.get(req.query), res, next);

export const getItemById = async (req, res, next) => handleService(itemService.getById(req.params.id), res, next);

export const updateItem = async (req, res, next) =>
  handleService(itemService.update(req.params.id, req.body), res, next);
