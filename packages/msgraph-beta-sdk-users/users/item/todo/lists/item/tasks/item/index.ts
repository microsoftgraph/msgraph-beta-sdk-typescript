/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTodoTaskFromDiscriminatorValue, serializeTodoTask, type TodoTask } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AttachmentsRequestBuilderNavigationMetadata, AttachmentsRequestBuilderRequestsMetadata, AttachmentsRequestBuilderUriTemplate, type AttachmentsRequestBuilder } from './attachments/';
import { AttachmentSessionsRequestBuilderNavigationMetadata, AttachmentSessionsRequestBuilderRequestsMetadata, AttachmentSessionsRequestBuilderUriTemplate, type AttachmentSessionsRequestBuilder } from './attachmentSessions/';
import { ChecklistItemsRequestBuilderNavigationMetadata, ChecklistItemsRequestBuilderRequestsMetadata, ChecklistItemsRequestBuilderUriTemplate, type ChecklistItemsRequestBuilder } from './checklistItems/';
import { ExtensionsRequestBuilderNavigationMetadata, ExtensionsRequestBuilderRequestsMetadata, ExtensionsRequestBuilderUriTemplate, type ExtensionsRequestBuilder } from './extensions/';
import { LinkedResourcesRequestBuilderNavigationMetadata, LinkedResourcesRequestBuilderRequestsMetadata, LinkedResourcesRequestBuilderUriTemplate, type LinkedResourcesRequestBuilder } from './linkedResources/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.todoTaskList entity.
 */
export interface TodoTaskItemRequestBuilder extends BaseRequestBuilder<TodoTaskItemRequestBuilder> {
    /**
     * Provides operations to manage the attachments property of the microsoft.graph.todoTask entity.
     */
    get attachments(): AttachmentsRequestBuilder;
    /**
     * Provides operations to manage the attachmentSessions property of the microsoft.graph.todoTask entity.
     */
    get attachmentSessions(): AttachmentSessionsRequestBuilder;
    /**
     * Provides operations to manage the checklistItems property of the microsoft.graph.todoTask entity.
     */
    get checklistItems(): ChecklistItemsRequestBuilder;
    /**
     * Provides operations to manage the extensions property of the microsoft.graph.todoTask entity.
     */
    get extensions(): ExtensionsRequestBuilder;
    /**
     * Provides operations to manage the linkedResources property of the microsoft.graph.todoTask entity.
     */
    get linkedResources(): LinkedResourcesRequestBuilder;
    /**
     * Deletes a todoTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/todotask-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a todoTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TodoTask
     * @see {@link https://learn.microsoft.com/graph/api/todotask-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TodoTaskItemRequestBuilderGetQueryParameters> | undefined) : Promise<TodoTask | undefined>;
    /**
     * Update the properties of a todoTask object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TodoTask
     * @see {@link https://learn.microsoft.com/graph/api/todotask-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: TodoTask, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TodoTask | undefined>;
    /**
     * Deletes a todoTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a todoTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TodoTaskItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a todoTask object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: TodoTask, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a todoTask object.
 */
export interface TodoTaskItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TodoTaskItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TodoTaskItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TodoTaskItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    attachments: {
        uriTemplate: AttachmentsRequestBuilderUriTemplate,
        requestsMetadata: AttachmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AttachmentsRequestBuilderNavigationMetadata,
    },
    attachmentSessions: {
        uriTemplate: AttachmentSessionsRequestBuilderUriTemplate,
        requestsMetadata: AttachmentSessionsRequestBuilderRequestsMetadata,
        navigationMetadata: AttachmentSessionsRequestBuilderNavigationMetadata,
    },
    checklistItems: {
        uriTemplate: ChecklistItemsRequestBuilderUriTemplate,
        requestsMetadata: ChecklistItemsRequestBuilderRequestsMetadata,
        navigationMetadata: ChecklistItemsRequestBuilderNavigationMetadata,
    },
    extensions: {
        uriTemplate: ExtensionsRequestBuilderUriTemplate,
        requestsMetadata: ExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: ExtensionsRequestBuilderNavigationMetadata,
    },
    linkedResources: {
        uriTemplate: LinkedResourcesRequestBuilderUriTemplate,
        requestsMetadata: LinkedResourcesRequestBuilderRequestsMetadata,
        navigationMetadata: LinkedResourcesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TodoTaskItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTodoTaskFromDiscriminatorValue,
        queryParametersMapper: TodoTaskItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTodoTaskFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTodoTask,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TodoTaskItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/todo/lists/{todoTaskList%2Did}/tasks/{todoTask%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */