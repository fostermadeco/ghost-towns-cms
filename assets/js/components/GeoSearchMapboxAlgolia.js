import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import GeoSearchMapBox from './GeoSearchMapbox';

const GeoSearchMapBoxAlgolia = connectHits(GeoSearchMapBox);

export default GeoSearchMapBoxAlgolia;
