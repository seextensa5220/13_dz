import { fetchUsers } from "../index.js";
import { expect } from "chai";
import fetch from 'node-fetch';
import sinon from 'sinon';

global.fetch = fetch;

describe("запрос на сервер", function () {
    afterEach(() => {
        sinon.restore();
    });

    let fetchStub;
    it("сравнение с моковыми пользователями", async function () {
        const mockUser = [
            {},
            {}
        ]

        fetchStub = sinon.stub(global, 'fetch').resolves({
            ok: true,
            json: async () => mockUser
        })

        const users = await fetchUsers();
        expect(fetchStub.calledOnce).to.be.true;
        expect(users).to.deep.equal(mockUser);
    })

    it('должен выбрасывать ошибку', async () => {
        try {
            await fetchUsers();
        } catch (error) {
            expect(error.message).to.equal('Ошибка');
        }
    });
})