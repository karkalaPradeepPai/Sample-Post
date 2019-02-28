import Component from '@ember/component';
import {inject as service} from '@ember/service';
import $ from 'jquery'

export default Component.extend({
  DS: service('store'),

  actions:{
    openModal: function () {
      this.set('title',null);
      this.set('body',null);
      $('.ui.newPost.modal').modal({
        closable: false,
        detachable: false,

        onDeny : () => {
          var newPost = this.get('DS').createRecord('post',{
            title: this.get('title'),
            body: this.get('body')
          });
          newPost.save().then(()=>{
            return true;
          });
        }
      })
        .modal('show');
    }
  }
});
