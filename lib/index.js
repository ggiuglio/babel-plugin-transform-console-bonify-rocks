module.exports = function(babel) {
  var t = babel.types
    return {
      name: "transform-console-bonify-rocks",
      visitor: {
        CallExpression(path) {
          const callee = path.node.callee;
          if(t.isMemberExpression(callee)) {
            if(callee.object.name == 'console' && callee.property.name == 'log') {
              path.node.arguments.unshift({
                type: 'StringLiteral',
                value: "Bonify rocks"
              })
            }
          }
        }
      }
    };
  };