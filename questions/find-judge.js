/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    let hash = buildHash(N, trust);
    let potentialJudges = Object.keys(hash).filter(people => hash[people].length === 0);
    if (potentialJudges.length === 0) return -1;

    let judge = -1;
    potentialJudges.forEach((potential) => {
        let isJudge = true;
        Object.keys(hash).forEach((people) => {
            if (potential !== people) {
                if (!hash[people].includes(potential)) {
                    isJudge = false;
                }
            }
        });
        if (isJudge) { judge = potential };
    });

    return judge;
};

var buildHash = function (N, trust) {
    let hash = {};

    for (let i = 0; i < N; i++) {
        hash[i + 1] = [];
    }
    for (trustRelation of trust) {
        hash[trustRelation[0]].push(trustRelation[1] + '');
    }

    return hash;
};

findJudge(2, [[1, 2]])