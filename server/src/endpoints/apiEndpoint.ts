import { phoneWordGenerator } from '../helpers/phoneWordGenerator';

export function apiEndpoint(app) {
    app.get('/api/phone-words/:input', (req, res) => {
        try {
            const list = phoneWordGenerator(req.params.input);
            res.json({ list });
        }
        catch (e) {
            res.status(400).send(e);
        }
    });
}
